import { useForm } from "react-hook-form";
import * as Styled from "./styles";
import {useState, useEffect} from 'react'
import { StoreProps } from "./interfaces";
import { api } from "../../services/api";

function NewStore() {
  const { register, handleSubmit, setValue} = useForm();
  const [pharmRegister, setPharmRegister] = useState(false);

  let stores: object[] = []

  if(!localStorage.getItem("localizacao")) {
    stores = []
  }

  if(localStorage.getItem("localizacao")){
    stores = JSON.parse(localStorage.getItem("localizacao") || "{}");
  }

  function onSubmit(data: StoreProps) {
    try{
    stores = [...stores, data]
    localStorage.setItem("localizacao", JSON.stringify(stores))
    setPharmRegister(true);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPharmRegister(false)
    }, 3000)

    return () => clearTimeout(timer);
  }, [pharmRegister])

  function CNPJ (e: React.FormEvent<HTMLInputElement>){
    const cnpj = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
    setValue('about.cnpj', cnpj)
  }

  function Tel(e: React.FormEvent<HTMLInputElement>) {
    const tel = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    setValue('about.tel', tel)
  }

  function Cel(e: React.FormEvent<HTMLInputElement>) {
    const cel = e.currentTarget.value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    setValue('about.cel', cel)
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
    <Styled.MainStyled>
      <Styled.FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Styled.H1Styled>Cadastro de farmácia</Styled.H1Styled>
        <Styled.PStyled>Digite corretamente as informações e endereço da nova loja</Styled.PStyled>
        <Styled.InfoStyled>
          <Styled.PForm>Dados da loja:</Styled.PForm>
          <Styled.InputStyled
            type="text"
            {...register("about.corpName")}
            alt="Digite a razão social da loja."
            placeholder="Razão social"
            required
          />
          <Styled.InputStyled
            type="text"
            {...register("about.cnpj")}
            alt="Digite o CNPJ da loja."
            placeholder="CNPJ (somente números)"
            onBlur={CNPJ}
            required
          />
          <Styled.InputStyled
            type="text"
            {...register("about.tradingName")}
            alt="Digite o nome fantasia da loja."
            placeholder="Nome Fantasia"
            required
          />
          <Styled.InputStyled
            type="email"
            {...register("about.email")}
            alt="Digite o e-mail de uso da loja."
            placeholder="E-mail"
            required
          />
          <Styled.InputStyled
            type="text"
            {...register("about.tel")}
            alt="Opcional: Digite o número de telefone fixo da loja."
            placeholder="Telefone (opcional)"
            onBlur={Tel}
          />
          <Styled.InputStyled
            type="text"
            {...register("about.cel")}
            alt="Digite o número de telefone celular da loja."
            placeholder="Celular"
            onBlur={Cel}
            required
          />
          
          <Styled.AddressStyled>
            <Styled.PAddress {...register("address")}>Dados do endereço:</Styled.PAddress>
            <Styled.InputStyled
              type="text"
              {...register("address.cep")} 
              alt="Digite o CEP da loja."
              placeholder="CEP (somente números)"
              onBlur={GetCEP}
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.street")} 
              alt="Digite o Logradouro/Endereço da loja."
              placeholder="Logradouro/Endereço"
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.num")} 
              alt="Digite o número da loja."
              placeholder="Número"
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.neighborhood")} 
              alt="Digite o bairro em que se encontra a loja."
              placeholder="Bairro"
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.city")} 
              alt="Digite a cidade em que se encontra a loja."
              placeholder="Cidade"
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.state")} 
              alt="Digite o estado (unidade federal) em que se encontra a loja."
              placeholder="Estado (UF)"
              required
            />
            <Styled.InputStyled
              type="text"
              {...register("address.complement")} 
              alt="Opcional: digite um complemento referente à loja."
              placeholder="Complemento (opcional)"
            />
              <Styled.GeolocInput
                type="text"
                {...register("lat", {valueAsNumber: true})} 
                alt="Digite a latitude referente à localização da loja."
                placeholder="Latitude"
                required
              />
              <Styled.GeolocInput
                type="text"
                {...register("long", {valueAsNumber: true})} 
                alt="Digite a longitude referente à localização da loja."
                placeholder="Longitude"
                required
              />
          </Styled.AddressStyled>
        <Styled.ButtonStyled type="submit"> Cadastrar </Styled.ButtonStyled>
        {pharmRegister && <Styled.PharmRegister>Nova farmácia cadastrada com sucesso.</Styled.PharmRegister>}
        </Styled.InfoStyled>
      </Styled.FormStyled>
    </Styled.MainStyled>
  );
}

export { NewStore };
