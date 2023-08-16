import { useForm } from "react-hook-form";
import { PageHr } from "./styles";
import { StoreProps } from "./interfaces";

function NewStore() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data: StoreProps) {
    localStorage.setItem("localizacao", JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro de farmácia</h3>
        <p>Digite corretamente as informações de endereço da nova loja</p>
        <PageHr />
        <input
          type="text"
          {...register("razSoc")}
          alt="Digite a razão social da loja."
          placeholder="Razão social"
          required
        />
        <input
          type="text"
          {...register("cnpj")}
          alt="Digite o CNPJ da loja."
          placeholder="CNPJ (somente números)"
          required
        />
        <input
          type="text"
          {...register("nomFant")}
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
          {...register("telf")}
          alt="Opcional: Digite o número de telefone fixo da loja."
          placeholder="Telefone (opcional)"
          required
        />
        <input
          type="text"
          {...register("telc")}
          alt="Digite o número de telefone celular da loja."
          placeholder="Celular"
          required
        />
        <fieldset>
          <legend>Endereço:</legend>
          <input
            type="text"
            {...register("cep")} 
            alt="Digite o CEP da loja."
            placeholder="CEP (somente números)"
            required
          />
          <input
            type="text"
            {...register("endereco")} 
            alt="Digite o Logradouro/Endereço da loja."
            placeholder="Logradouro/Endereço"
            required
          />
          <input
            type="text"
            {...register("num")} 
            alt="Digite o número da loja."
            placeholder="Número"
            required
          />
          <input
            type="text"
            {...register("bairro")} 
            alt="Digite o bairro em que se encontra a loja."
            placeholder="Bairro"
            required
          />
          <input
            type="text"
            {...register("cidade")} 
            alt="Digite a cidade em que se encontra a loja."
            placeholder="Cidade"
            required
          />
          <input
            type="text"
            {...register("uf")} 
            alt="Digite o estado (unidade federal) em que se encontra a loja."
            placeholder="Estado (UF)"
            required
          />
          <input
            type="text"
            {...register("complemento")} 
            alt="Opcional: digite um complemento referente à loja."
            placeholder="Complemento (opcional)"
            required
          />
          <fieldset>
            <legend>Geolocalização:</legend>
            <input
              type="text"
              {...register("lat")} 
              alt="Digite a latitude referente à localização da loja."
              placeholder="Latitude"
              required
            />
            <input
              type="text"
              {...register("long")} 
              alt="Digite a longitude referente à localização da loja."
              placeholder="Longitude"
              required
            />
          </fieldset>
        </fieldset>
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export { NewStore };
