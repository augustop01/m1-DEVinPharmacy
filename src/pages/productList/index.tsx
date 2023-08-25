import {BaseSyntheticEvent, useEffect, useState} from "react"
import { ProductProps } from "../newProduct/interfaces"
import { MedCards } from "../../components/MedCards"
import * as styled from "./styles"

function ProductList() {
  const response: ProductProps[] = JSON.parse(localStorage.getItem("products") || "");
  const products = response;
  const [typeFilter, setTypeFilter] = useState("no-filter");
  const [nameFilter, setNameFilter] = useState("");
  const [medList, setMedList] = useState(products)

  useEffect(() => {
  const name = nameFilter;
  const type = typeFilter;
  setMedList(products)
  let updatedList = [...products]
  if(name === "" && type === "no-filter"){
  return setMedList(products)
  }
  else if(type === "alpha"){
    updatedList = updatedList.sort((a, b) => (a.name! > b.name!) ? 1 : -1)
    return setMedList(updatedList)
  } else if(type === "rise") {
    updatedList = updatedList.sort((a, b) => a.price! - b.price!)
    return setMedList(updatedList)
  } else if(type === "desc") {
    updatedList = updatedList.sort((a, b) => b.price! - a.price!)
    return setMedList(updatedList)
  }
    else if(type === "no-filter") {
      updatedList = updatedList.filter((med) => {
      return med.name?.toLowerCase().includes(name.toLowerCase())})
      return setMedList(updatedList);} 
    updatedList = updatedList.filter((med) => {
    return med.isControlled?.includes(type) && med.name?.toLowerCase().includes(name.toLowerCase())
  });
  setMedList(updatedList)
  }, [nameFilter, typeFilter])
  
if(products.length === 0) {
  return(
    <main>
      <h1>Não existem medicamentos cadastrados.</h1>
      <p><a href="/cadastro-medicamento">{`Clique aqui `}</a>para registrar um novo medicamento.</p>
    </main>
  )
}

  function filterType(event: BaseSyntheticEvent){
    console.log(event)
    setTypeFilter(event.target.value);}

  function filterName(event: BaseSyntheticEvent){
    setNameFilter(event.target.value)}

  return(
    <styled.MainStyled>
      <styled.FilterSectStyled>
      <styled.H2Styled>Medicamentos registrados</styled.H2Styled>
        <styled.FormStyled>
          <styled.SelectStyled onChange={filterType}>
            <styled.OptionStyled value=".0" hidden>
              Filtrar por tipo
            </styled.OptionStyled>
            <styled.OptionStyled value="no-filter">Todos</styled.OptionStyled>
            <styled.OptionStyled value="false">Comum</styled.OptionStyled>
            <styled.OptionStyled value="true">Controlado</styled.OptionStyled>
            <styled.OptionStyled value="alpha">Ordem Alfabética</styled.OptionStyled>
            <styled.OptionStyled value="rise">Preço crescente</styled.OptionStyled>
            <styled.OptionStyled value="desc">Preço decrescente</styled.OptionStyled>
          </styled.SelectStyled>
          <styled.InputStyled 
          type="text" 
          alt="Pesquise medicamentos pelo nome"
          placeholder="Pesquise medicamentos pelo nome"
          onChange={filterName}
          />
        </styled.FormStyled>
      </styled.FilterSectStyled>
      <styled.CardsSectStyled>
        <MedCards meds={medList}/>
      </styled.CardsSectStyled>
    </styled.MainStyled>
  )
}

export {ProductList}