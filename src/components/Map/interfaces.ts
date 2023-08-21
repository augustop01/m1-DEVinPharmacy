import { StoreProps } from "../../pages/newStore/interfaces";
import { LatLngExpression } from "leaflet";

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