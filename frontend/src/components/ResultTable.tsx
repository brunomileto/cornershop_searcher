import { useEffect, useState } from "react";
import { Product } from "../entities/Product";
import { Store } from "../entities/Store";
import { api } from "../services/api";

interface ResultTableProps {
  searchTerm: string;
}

const TranslateColumn = {
  availabilityStatus: "Disponível",
  imgUrl: "Imagem",
  name: "Nome",
  price: "Preço",
  searchTerm: "Termo de Busca",
  store: "Mercado",
  unitValue: "Unidade",
  unity: "Unidade de Compra",
};

export const ResultTable = ({ searchTerm }: ResultTableProps) => {
  const [products, setProducts] = useState<Product[]>();
  console.log(searchTerm);
  useEffect(() => {
    const searchProducts = async () => {
      const apiBodyData = { searchTerm, cep: "74305360", country: "BR" };
      const newProducts = (await api.post("/allProducts", apiBodyData)).data;
      console.log(newProducts);
      setProducts(newProducts);
    };

    searchProducts();
  }, [searchTerm]);
  if (
    products?.length === 0 ||
    products === undefined ||
    products![0] === undefined
  ) {
    return <h1>Nenhum produto encontrado para o termo informado.</h1>;
  }
  const productOne = products![0];
  return (
    <table className="text-center">
      <thead className="border-b bg-gray-800">
        <tr className="">
          {Object.entries(productOne).map((item) => {
            return (
              <th
                scope="col"
                className="text-base font-medium text-white px-6 py-4"
              >
                {TranslateColumn[item[0]]}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {products?.map((product: Product) => {
          return (
            <tr className="bg-white border-b" key={product.name}>
              {Object.entries(product).map((item) => {
                if (item[0] === "store") {
                  return (
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      key={item[0]}
                    >
                      {item[1].name}
                    </td>
                  );
                }
                if (item[0] === "imgUrl") {
                  return (
                    <td key={item[0]} className="w-6 h-6">
                      <img src={item[1]} />
                    </td>
                  );
                }
                return (
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600"
                    key={item[1]}
                  >
                    {item[1]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
