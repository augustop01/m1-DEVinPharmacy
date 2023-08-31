import { TileLayer } from 'react-leaflet';
import { MapProps } from './interfaces';
import {MapContainerStyled, MarkerStyled, PopupStyled} from './styles'
import { Icon } from 'leaflet';
import { useApp } from '../../hooks/useApp';


function Map({positions, center}: MapProps) {
  const markerIcon = new Icon({
      iconUrl: "img/map-pin.png",
      iconSize: [30, 40]
  })
  
  const {theme} = useApp();

    return (
      <MapContainerStyled center={center} zoom={13}>
        {
          theme === 'light' 
          ? <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          :
        <TileLayer
        url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=xAhNiGo29c38nMZrkywDGlu5uIEWZFtoMPlbO4yYaDpEBx0ozuZzRxyLK5NAGdZ8"
        accessToken='xAhNiGo29c38nMZrkywDGlu5uIEWZFtoMPlbO4yYaDpEBx0ozuZzRxyLK5NAGdZ8'
        attribution='Jawg-Dark-mode'
      />
        }
      {
      positions.map(({lat, long, address, about}, index) => {
        return(
      <MarkerStyled position={[lat!, long!]} icon={markerIcon} key={index}>
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