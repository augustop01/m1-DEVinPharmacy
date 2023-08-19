import { LatLngExpression } from "leaflet";

export interface MapProps {
  position: LatLngExpression
  address: {
    cep?: string;
    street?: string;
    num?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    complement?: string;
    }
}