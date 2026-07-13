export interface Soap {
  id: number;
  name: string;
  picture: string;
  price: number;
}

export interface SoapDetails extends Soap {
  description: string;
}