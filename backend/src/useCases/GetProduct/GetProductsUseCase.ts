import { IProductsProvider } from "../../providers/IProductsProvider";
import { Product } from "../../entities/Product";
import { Store } from "../../entities/Store";

export class GetProductsUseCase {
  private productsProvider: IProductsProvider;
  productsList: Product[];

  constructor(productsProvider: IProductsProvider) {
    this.productsProvider = productsProvider;
  }

  async execute(
    searchTerm: string,
    cep: string,
    country: string
  ): Promise<Product[]> {
    this.productsList = [
      ...(await this.productsProvider.getAllProducts(searchTerm, cep, country)),
    ];
    if (this.productsList.length === 0) {
      const emptyProductList: Product[] = [new Product()];
      return emptyProductList;
    }
    return this.productsList;
  }
}
