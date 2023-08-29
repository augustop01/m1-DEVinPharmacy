import { TileLayer } from 'react-leaflet';
import { MapProps } from './interfaces';
import {MapContainerStyled, MarkerStyled, PopupStyled} from './styles'

function Map({positions, center}: MapProps) {
    return (
      <MapContainerStyled center={center} zoom={13}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
      positions.map(({lat, long, address, about}, index) => {
        return(
      <MarkerStyled position={[lat!, long!]} key={index}>
        <PopupStyled>
          <h3>{about?.tradingName}</h3>
          <p>{address?.street}, {address?.num} {address?.complement ? `- ${address.complement}` : ``}</p>
          <p>{address?.neighborhood}, {address?.city}, {address?.state} - {address?.cep}</p>
          <h4>Contato:</h4>
          {about?.tel ? <><a>{about?.tel}</a>
          <br /></> : ``}
          <a href={`https://wa.me/55${about?.cel}`}>{about?.cel}</a>
          <p>----------------</p>
          <p>{about?.corpName} - [CNPJ: {about?.cnpj}]</p>
          
          
        </PopupStyled>
      </MarkerStyled>
        )
      })
      }
      </MapContainerStyled>
  )}
  
export {Map};