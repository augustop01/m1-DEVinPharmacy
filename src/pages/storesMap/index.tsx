import { Map } from "../../components/Map"

function StoresMap () {

  const response = localStorage.getItem("stores");
  
  if(response == null) {
    return (
      <>
      <h1>Nenhuma loja foi registrada ainda.</h1>
      <a style={{color: 'blue'}} href="/cadastro-farmacia">Clique aqui</a> para registrar uma loja.
      </>
    )
  }

  const storeList = JSON.parse(response);

  return (
    <>
      <Map position={[storeList[0].lat, storeList[0].long]} address={storeList[0]}/>
    </>
  )
}

export {StoresMap}