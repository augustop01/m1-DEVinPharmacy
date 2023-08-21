import { useForm } from "react-hook-form";
import { PageHr } from "./styles";
import { StoreProps } from "./interfaces";
import { api } from "../../services/api";

function NewStore() {
  const { register, handleSubmit, setValue, reset} = useForm();
  let stores: object[] = []

  if(!localStorage.getItem("localizacao")) {
    stores = []
  }

  if(localStorage.getItem("localizacao")){
    stores = JSON.parse(localStorage.getItem("localizacao") || "{}");
  }

  function onSubmit(data: StoreProps) {
    stores = [...stores, data]
    localStorage.setItem("localizacao", JSON.stringify(stores))
  }

  function CNPJ (e: React.FormEvent<HTMLInputElement>){
    const cnpj = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
    setValue('cnpj', cnpj)
  }

  function Tel(e: React.FormEvent<HTMLInputElement>) {
    const tel = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    setValue('tel', tel)
  }

  function Cel(e: React.FormEvent<HTMLInputElement>) {
    const cel = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    setValue('cel', cel)
  }

  function GetCEP(e: React.FormEvent<HTMLInputElement>) {
    const load = async () => {
      const cep = e.currentTarget.value.replace(/\D/g, '')
      const response = (await api.get(`${cep}`)).data;
      setValue('address.street', response.street);
      setValue('address.neighborhood', response.neighborhood);
      setValue('address.city', response.city);
      setValue('address.state', response.state);
      setValue('lat', response.location.coordinates.latitude);
      setValue('long', response.location.coordinates.longitude);
    }
    const cep = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
    setValue('address.cep', cep)
      load()
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro de farmácia</h3>
        <p>Digite corretamente as informações de endereço da nova loja</p>
        <PageHr />
        <input
          type="text"
          {...register("corpName")}
          alt="Digite a razão social da loja."
          placeholder="Razão social"
          required
        />
        <input
          type="text"
          {...register("cnpj")}
          alt="Digite o CNPJ da loja."
          placeholder="CNPJ (somente números)"
          onBlur={CNPJ}
          required
        />
        <input
          type="text"
          {...register("tradingName")}
          alt="Digite o nome fantasia da loja."
          placeholder="Nome Fantasia"
          required
        />
        <input
          type="email"
          {...register("email")}
          alt="Digite o e-mail de uso da loja."
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          {...register("tel")}
          alt="Opcional: Digite o número de telefone fixo da loja."
          placeholder="Telefone (opcional)"
          onBlur={Tel}
        />
        <input
          type="text"
          {...register("cel")}
          alt="Digite o número de telefone celular da loja."
          placeholder="Celular"
          onBlur={Cel}
          required
        />
        <fieldset>
          <legend {...register("address")}>Endereço:</legend>
          <input
            type="text"
            {...register("address.cep")} 
            alt="Digite o CEP da loja."
            placeholder="CEP (somente números)"
            onBlur={GetCEP}
            required
          />
          <input
            type="text"
            {...register("address.street")} 
            alt="Digite o Logradouro/Endereço da loja."
            placeholder="Logradouro/Endereço"
            required
          />
          <input
            type="text"
            {...register("address.num")} 
            alt="Digite o número da loja."
            placeholder="Número"
            required
          />
          <input
            type="text"
            {...register("address.neighborhood")} 
            alt="Digite o bairro em que se encontra a loja."
            placeholder="Bairro"
            required
          />
          <input
            type="text"
            {...register("address.city")} 
            alt="Digite a cidade em que se encontra a loja."
            placeholder="Cidade"
            required
          />
          <input
            type="text"
            {...register("address.state")} 
            alt="Digite o estado (unidade federal) em que se encontra a loja."
            placeholder="Estado (UF)"
            required
          />
          <input
            type="text"
            {...register("address.complement")} 
            alt="Opcional: digite um complemento referente à loja."
            placeholder="Complemento (opcional)"
          />
          <fieldset>
            <legend>Geolocalização:</legend>
            <input
              type="text"
              {...register("lat", {valueAsNumber: true})} 
              alt="Digite a latitude referente à localização da loja."
              placeholder="Latitude"
              required
            />
            <input
              type="text"
              {...register("long", {valueAsNumber: true})} 
              alt="Digite a longitude referente à localização da loja."
              placeholder="Longitude"
              required
            />
          </fieldset>
        </fieldset>
        <button type="submit"> Cadastrar </button>
        <input type="button" onClick={() => reset()} value=" Limpar " style={{marginLeft: '2rem'}}/>
      </form>
    </main>
  );
}

export { NewStore };
