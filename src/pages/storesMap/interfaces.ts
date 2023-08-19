export interface StoreProps {
  corpName?: string;
  cnpj?: string;
  tradingName?: string;
  email?: string;
  tel?: string;
  cel?: string;
  cep?: string;
  address: {
  street?: string;
  num?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  complement?: string;
  lat?: string;
  long?: string;
  }
}