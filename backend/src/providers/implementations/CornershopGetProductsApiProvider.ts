import { IProductsProvider } from "../IProductsProvider";
import { Product } from "../../entities/Product";
import axios from "axios";
import { Store } from "../../entities/Store";

export class CornershopGeProductsApiProvider implements IProductsProvider {
  getBestProducts(products: Product[]): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  products: Product[];
  private GET_PRODUCTS_BASE_URL =
    "https://cornershopapp.com/api/v2/branches/search?";

  private getNewStore(store: any): Store {
    const newStore = new Store();
    newStore.id = store.closest_branch.id;
    newStore.address = store.closest_branch.address;
    newStore.city = store.closest_branch.city;
    newStore.hasSamePrices = store.closest_branch.has_same_prices;
    newStore.imgUrl = store.img_url;
    newStore.lightImgUrl = store.light_img_url;
    newStore.name = store.name;
    return newStore;
  }
  private getNewProduct(
    productAisle: any,
    newStore: Store,
    searchTerm: string
  ): Product {
    const newProduct = new Product();
    newProduct.availabilityStatus = productAisle.availability_status;
    newProduct.imgUrl = productAisle.img_url;
    newProduct.name = productAisle.name;
    newProduct.price = productAisle.price;
    newProduct.searchTerm = searchTerm;
    newProduct.storeName = newStore.name;
    newProduct.storeLocation = newStore.address;
    newProduct.unitValue = productAisle.package;
    newProduct.unity = productAisle.buy_unit;
    return newProduct;
  }
  async getAllProducts(
    searchTerm: string,
    cep: string,
    country: string
  ): Promise<Product[]> {
    const url = `${this.GET_PRODUCTS_BASE_URL}query=${searchTerm}&locality=${cep}&country=${country}`;
    const responseData = (await axios.get(url)).data;
    const productsList: Product[] = [];

    responseData.results.forEach((store) => {
      const newStore = this.getNewStore(store.store);
      store.search_result.aisles.forEach((aisles) => {
        aisles.products.forEach((product) => {
          const newProduct = this.getNewProduct(product, newStore, searchTerm);
          productsList.push(newProduct);
        });
      });
    });

    productsList.sort((productA, productB) => {
      if (
        productA.storeName.toLocaleLowerCase() ==
        productB.storeName.toLocaleLowerCase()
      ) {
        return productA.price < productB.price ? -1 : 1;
      }

      return productA.storeName.toLocaleUpperCase() <
        productB.storeLocation.toLocaleUpperCase()
        ? -1
        : 1;
    });

    return productsList;
  }
}
