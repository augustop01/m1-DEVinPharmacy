import { Map } from "../../components/Map"

function StoresMap () {


  const response = JSON.parse(localStorage.getItem("stores") || "{}");

  console.log(response)

  if(response?.length === 0) {
    return (
      <>
      <h1>Nenhuma loja foi registrada ainda.</h1>
      <a style={{color: 'blue'}} href="/cadastro-farmacia">Clique aqui</a> para registrar uma loja.
      </>
    )
  }

  return (
    <>
      <Map positions={response} center={[response[0].lat, response[0].long]}/>
    </>
  )
}

export {StoresMap}