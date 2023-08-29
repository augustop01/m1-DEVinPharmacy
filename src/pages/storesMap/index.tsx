import { Map } from '../../components/Map';
import {useState, useEffect} from "react"
import { StoreProps } from '../newStore/interfaces';
import * as Styled from './styles';

function StoresMap () {
  const [stores, setStores] = useState<StoreProps[]>([]);

  useEffect(() => {
    const load = async () => {
      const response =  JSON.parse(localStorage.getItem("localizacao") || "")
      setStores(response)
    }
    load()
  }, [])
  
  if (stores.length == 0){
    return (
      <Styled.NoStoreMain>
        <Styled.NoStoreDiv>
          <Styled.NoStoreH1>Não há lojas cadastradas</Styled.NoStoreH1>
          <Styled.NoStoreP><Styled.NoStoreA href="/cadastro-farmacia">Clique aqui</Styled.NoStoreA> e cadastre uma nova farmácia</Styled.NoStoreP>
        </Styled.NoStoreDiv>
      </Styled.NoStoreMain>
    )
  }
  return (
      <Styled.MainStyled>
        <Styled.H1Styled>FARMÁCIAS</Styled.H1Styled>
        <Map positions={stores} center={[-26.3008481, -48.8240764]}/>
      </Styled.MainStyled>
  )
  }
  
export {StoresMap}