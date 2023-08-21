import { Map } from '../../components/Map';
import {useState, useEffect} from "react"
import { StoreProps } from '../newStore/interfaces';

function StoresMap () {
  const [stores, setStores] = useState<StoreProps[]>([]);

  useEffect(() => {
    const load = async () => {
      const response =  JSON.parse(localStorage.getItem("localizacao") || "{}")
      setStores(response)
    }
    load()
  }, [])
  
  if (stores.length == 0){
    return (
      <>
      <h1>Nenhuma loja foi registrada ainda.</h1>
      <a style={{color: 'blue'}} href="/cadastro-farmacia">Clique aqui</a> para registrar uma loja.
      </>
    )
  }
    console.log(stores[0])
  return (
      <>
        <Map positions={stores} center={[-26.3008481, -48.8240764]}/>
      </>
  )
  }
  
export {StoresMap}