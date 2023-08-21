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
      positions.map(({lat, long}, index) => {
        return(
      <MarkerStyled position={[lat!, long!]} key={index}>
        <PopupStyled>
          Teste
        </PopupStyled>
      </MarkerStyled>
        )
      })
      }
      </MapContainerStyled>
  )}
  
export {Map};