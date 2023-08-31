import { useForm } from "react-hook-form";
import { ProductProps } from "./interfaces";
import * as Styled from './styles'
import {useEffect, useState} from 'react';
import { useApp } from '../../hooks/useApp';

function NewProduct() {
  const { register, handleSubmit, setValue} = useForm();
  const [medRegister, setMedRegister] = useState(false);
  const {theme} = useApp();
  let products: ProductProps[] = [];

  if(localStorage.getItem("products")){
    products = JSON.parse(localStorage.getItem("products") || "{}");
  }

  function onSubmit(data: ProductProps) {
    if(data.isControlled === '0'){
      alert('Selecione o tipo do medicamento.')
      return
    }
    try{
    if(!localStorage.getItem("products")){
      products = [];
    }
    for(let i = 0; i < products.length; i++){
      if(products[i].name == data.name && products[i].dose == data.dose){
        return alert("Já existe um medicmento com o mesmo nome e dosagem.")
      }
    }
    products = [...products, data]
    const i = products.length-1;
    products[i] = {...products[i], id: `${products.length}` || undefined}
    localStorage.setItem("products", JSON.stringify(products))
    setMedRegister(true);
  } catch(error){
    console.log(error);
  }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setMedRegister(false)
    }, 3000)

    return () => clearTimeout(timer);
  }, [medRegister])

  function select(e: React.FormEvent<HTMLInputElement>){
    e.currentTarget.select();
  }

  function brReal(e: React.FormEvent<HTMLInputElement>){
    const value = e.currentTarget.value.replace(/(\D)/g, '');
    const price = Number(value);
    setValue('price', value);
    if(price > 0 && price < 100){
      const newValue = value.replace(/(\d{1,2})/, '$1.00')
      return setValue('price', newValue)
    }
    if(price > 99){
      const newValue = value.replace(/(\d+)(\d{2})/, '$1.$2')
      return setValue('price', newValue)
    }
}

  return (
    <Styled.MainStyled pagetheme={theme}>
      <Styled.FormStyled
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        > 
        <Styled.H1Styled>Cadastro de novo medicamento</Styled.H1Styled>
        <Styled.InfoStyled>
        <Styled.InputStyled
          type="text"
          {...register("name")}
          alt="Digite o nome do medicamento"
          placeholder="Nome do medicamento"
          required
        />
        <Styled.InputStyled
          type="text"
          {...register("lab")}
          alt="Digite o laboratório do medicamento"
          placeholder="Laboratório do medicamento"
          required
        />
        <Styled.InputStyled
          type="text"
          {...register("dose")}
          alt="Digite a dosagem do medicamento"
          placeholder="Dosagem do medicamento"
          required
        />
        <Styled.TextAreaStyled
          {...register("description")}
          cols= {30}
          rows= {10}
          placeholder="Descrição do medicamenjto (opcional)"
        />
        <Styled.InputPriceStyled
          type="text"
          {...register("price")}
          onBlur={brReal}
          onFocus={select}
          alt="Digite o preço unitário do medicamento"
          placeholder="Preço unitário" 
          title="Digite o preço unitário do medicamento"
          required
        />
        <Styled.SelectStyled {...register("isControlled")}>
          <Styled.OptionStyled value="0" hidden >
            Selecione o tipo do medicamento
          </Styled.OptionStyled>
          <Styled.OptionStyled value="false">Medicamento comum</Styled.OptionStyled>
          <Styled.OptionStyled value="true">Medicamento controlado</Styled.OptionStyled>
        </Styled.SelectStyled>
        <Styled.ButtonStyled type="submit"> Cadastrar </Styled.ButtonStyled>
        {medRegister && <Styled.MedRegister>Novo medicamento foi cadastrado com sucesso.</Styled.MedRegister>}
        </Styled.InfoStyled>
      </Styled.FormStyled>
    </Styled.MainStyled>
  );
}

export { NewProduct };
