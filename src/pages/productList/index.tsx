import {BaseSyntheticEvent, useEffect, useState} from "react"
import { ProductProps } from "../newProduct/interfaces"
import { MedCards } from "../../components/MedCards"

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
    <main>
      <section>
        <form>
          <select onChange={filterType}>
            <option value="option0" hidden>
              Filtrar por tipo
            </option>
            <option value="no-filter">Todos</option>
            <option value="false">Comum</option>
            <option value="true">Controlado</option>
            <option value="alpha">Ordem Alfabética</option>
            <option value="rise">Preço crescente</option>
            <option value="desc">Preço decrescente</option>
          </select>
          <input 
          type="text" 
          alt="Pesquise medicamentos pelo nome"
          placeholder="Pesquise medicamentos pelo nome"
          onChange={filterName}
          />
        </form>
      </section>
      <section style={{display: "flex", justifyContent: "space-around"}}>
        <MedCards meds={medList}/>
      </section>
    </main>
  )
}

export {ProductList}