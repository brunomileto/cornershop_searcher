import { Store } from "./Store";

export interface Product {
  store: Store;
  searchTerm: string;
  name: string;
  unity: string;
  price: number;
  unitValue: string;
  imgUrl: string;
  availabilityStatus: string;
}
