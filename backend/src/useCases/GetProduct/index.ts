import { CornershopGeProductsApiProvider } from "../../providers/implementations/CornershopGetProductsApiProvider";
import { GetProductsController } from "./GetProductsController";
import { GetProductsUseCase } from "./GetProductsUseCase";

const getProductProvider = new CornershopGeProductsApiProvider();

const getProductsUseCase = new GetProductsUseCase(getProductProvider);

const getProductsController = new GetProductsController(getProductsUseCase);
export { getProductsUseCase, getProductsController };
