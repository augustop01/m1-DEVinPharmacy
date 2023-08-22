export interface StoreProps {
  lat?: number;
  long?: number;
  about?:{
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
}