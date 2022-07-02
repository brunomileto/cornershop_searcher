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
    const allProductsList = [
      ...(await this.productsProvider.getAllProducts(searchTerm, cep, country)),
    ];
    if (allProductsList.length === 0) {
      const emptyProductList: Product[] = [new Product()];
      return emptyProductList;
    }
    this.productsList = [
      ...allProductsList.filter(
        (product) => !product.availabilityStatus.includes("OUT")
      ),
    ];
    return this.productsList;
  }
}
