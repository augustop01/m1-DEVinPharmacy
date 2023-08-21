import { LatLngExpression } from "leaflet";
import { StoreProps } from "../../pages/newStore/interfaces";

export interface MapProps {
  positions: StoreProps[];
  center: LatLngExpression;
    cep?: string;
    street?: string;
    num?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    complement?: string;
    lat?: number;
    long?: number;
}