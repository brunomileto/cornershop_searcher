import { Product } from "../entities/Product";
export interface IProductsProvider {
  products: Product[];
  getAllProducts(
    searchTerm: string,
    CEP: string,
    Country: string
  ): Promise<Product[]>;

  getBestProducts(products: Product[]): Promise<Product[]>;
}
