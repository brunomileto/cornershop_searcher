class Product {
  public readonly id: string;

  public name: string;
  public value: string;

  constructor(props: Omit<Product, "id">, id?: string) {}
}
