import { useForm } from "react-hook-form";
import { ProductProps } from "./interfaces";
import * as Styled from './styles'

function NewProduct() {
  const { register, handleSubmit} = useForm();
  let products: ProductProps[] = [];

  if(localStorage.getItem("products")){
    products = JSON.parse(localStorage.getItem("products") || "{}");
  }

  function onSubmit(data: ProductProps) {
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
  }

  return (
    <Styled.MainStyled>
      <Styled.FormStyled
        onSubmit={handleSubmit(onSubmit)}
        > 
        <Styled.H1Styled>Cadastro de novo medicamento</Styled.H1Styled>
        <Styled.SpanStyled>
        <Styled.PStyled>
          Informe os dados do medicamento a ser adicionado ao banco de dados
        </Styled.PStyled>
        </Styled.SpanStyled>
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
        <Styled.InputStyled
          type="text"
          {...register("price")}
          alt="Digite o preço unitário do medicamento"
          placeholder="(R$) Preço unitário"
          required
        />
        <Styled.SelectStyled>
          <Styled.OptionStyled value=".0" hidden>
            Selecione o tipo do medicamento
          </Styled.OptionStyled>
          <Styled.OptionStyled value="false">Medicamento comum</Styled.OptionStyled>
          <Styled.OptionStyled value="true">Medicamento controlado</Styled.OptionStyled>
        </Styled.SelectStyled>
        <Styled.ButtonStyled type="submit"> Cadastrar </Styled.ButtonStyled>
        </Styled.InfoStyled>
      </Styled.FormStyled>
    </Styled.MainStyled>
  );
}

export { NewProduct };
