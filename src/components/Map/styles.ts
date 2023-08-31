import { MapContainer, Marker, Popup } from 'react-leaflet';
import styled, { css } from "styled-components";

export const MapContainerStyled = styled(MapContainer)`
  height: calc(100vh - 4rem);
  width: 100%;
  z-index: 1;
`

export const MarkerStyled = styled(Marker)`
`

const lightMode = css`
.leaflet-popup-content-wrapper, .leaflet-popup-tip{
background-color: #ffffff;
border-radius: 0.5rem;
color: #000000;
}
a{
color: #1d849b;
text-decoration: none;
}
`

const darkMode = css`
.leaflet-popup-content-wrapper, .leaflet-popup-tip{
background-color: #284245;
border-radius: 0.5rem;
color: #ffffff;
}
a{
color: #03cdfb;
text-decoration: none;
}
`

export const PopupStyled = styled(Popup)<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}
`
