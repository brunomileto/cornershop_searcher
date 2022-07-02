import { Request, Response } from "express";
import { getProductsController } from "../../../src/useCases/GetProduct";
import microCors from "micro-cors";
const cors = microCors();
const allProducts = async (request: Request, response: Response) => {
  const { body } = request;
  return getProductsController.handle(request, response);
};

const allowCors = (fn) => async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  response.setHeader("Access-Control-Allow-Methods", "POST");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (request.method === "OPTIONS") {
    response.status(200).end();
    return;
  }
  return await fn(request, response);
};

export default cors(allowCors(allProducts));
