export interface StoreProps {
  corpName?: string;
  cnpj?: string;
  tradingName?: string;
  email?: string;
  tel?: string;
  cel?: string;
  lat?: string;
  long?: string;
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