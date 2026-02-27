export interface IOrder {
  destinationCountry: TCountry;
  shipping: Date;
  price: TPrice;
}

type TCountry = string;
type TPrice = number;
