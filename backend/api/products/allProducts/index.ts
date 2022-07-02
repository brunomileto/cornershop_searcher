import { Request, Response } from "express";
import { getProductsController } from "../../../src/useCases/GetProduct";
import microCors from "micro-cors";
const cors = microCors();
const allProducts = async (request: Request, response: Response) => {
  const { body } = request;
  return getProductsController.handle(request, response);
};

export default cors(allProducts);
