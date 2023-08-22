import { StoreProps } from "../../pages/newStore/interfaces";
import { LatLngExpression } from "leaflet";

export interface MapProps {
  positions: StoreProps[];
  center: LatLngExpression;
  about?: {
    corpName?: string;
    cnpj?: string;
    tradingName?: string;
    email?: string;
    tel?: string;
    cel?: string;
  }
  address?: {
    cep?: string;
    street?: string;
    num?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    complement?: string;
  }
    lat?: number;
    long?: number;
}