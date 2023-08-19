import { TileLayer } from 'react-leaflet';
import { MapProps } from './interfaces';
import { MapContainerStyled, MarkerStyled, PopupStyled } from "./styles"

function Map({address, position}: MapProps) {
  return (
    <MapContainerStyled center={position} zoom={13}>
      <MarkerStyled position={position}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <PopupStyled>
          <p>{address.street} {address.num}, {address.neighborhood}</p>
          <p>{address.city}, {address.state}, {address.cep}</p>
        </PopupStyled>
      </MarkerStyled>
    </MapContainerStyled>
  );
}

export {Map};