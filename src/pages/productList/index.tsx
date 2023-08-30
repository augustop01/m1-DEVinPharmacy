import {BaseSyntheticEvent, useEffect, useState} from "react"
import { MedCards } from "../../components/MedCards"
import * as Styled from "./styles"
import { useApp } from '../../hooks/useApp';

function ProductList() {
  const response = JSON.parse(localStorage.getItem("products") || "[]");
  const products = response;
  const originalList = products; 
  const [typeFilter, setTypeFilter] = useState("no-filter");
  const [nameFilter, setNameFilter] = useState("");
  const [medList, setMedList] = useState(products)
  const {theme} = useApp();

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
    <Styled.NoProductMain pagetheme={theme}>
      <Styled.NoProductDiv>
      <Styled.NoProductH1>Não há medicamentos cadastrados</Styled.NoProductH1>
      <Styled.NoProductP><Styled.NoProductA href="/cadastro-medicamento">Clique aqui</Styled.NoProductA>e cadastre um novo medicamento</Styled.NoProductP>
      </Styled.NoProductDiv>
    </Styled.NoProductMain>
  )
}

  function filterType(event: BaseSyntheticEvent){
    console.log(event)
    setTypeFilter(event.target.value);}

  function filterName(event: BaseSyntheticEvent){
    setNameFilter(event.target.value)}

  return(
    <Styled.MainStyled pagetheme={theme}>
      <Styled.FilterSectStyled>
      <Styled.H2Styled>Medicamentos registrados</Styled.H2Styled>
        <Styled.FormStyled>
          <Styled.SelectStyled onChange={filterType}>
            <Styled.OptionStyled value=".0" hidden>
              Forma de exibição
            </Styled.OptionStyled>
            <Styled.OptionStyled value="no-filter">Todos</Styled.OptionStyled>
            <Styled.OptionStyled value="false">Somente comuns</Styled.OptionStyled>
            <Styled.OptionStyled value="true">Somente controlados</Styled.OptionStyled>
            <Styled.OptionStyled value="alpha">Ordem Alfabética</Styled.OptionStyled>
            <Styled.OptionStyled value="rise">Preço crescente</Styled.OptionStyled>
            <Styled.OptionStyled value="desc">Preço decrescente</Styled.OptionStyled>
          </Styled.SelectStyled>
          <Styled.InputStyled 
          type="text" 
          alt="Pesquise medicamentos pelo nome"
          placeholder="Pesquise medicamentos pelo nome"
          onChange={filterName}
          />
        </Styled.FormStyled>
      </Styled.FilterSectStyled>
      <Styled.CardsSectStyled>
        <MedCards meds={medList} original={originalList}/>
      </Styled.CardsSectStyled>
    </Styled.MainStyled>
  )
}

export {ProductList}