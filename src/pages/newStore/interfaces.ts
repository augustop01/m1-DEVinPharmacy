export interface StoreProps {
  corpName?: string;
  cnpj?: string;
  tradingName?: string;
  email?: string;
  tel?: string;
  cel?: string;
  lat: number;
  long: number;
  address?: {
    cep?: string;
    street?: string;
    num?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    complement?: string;
  }
}