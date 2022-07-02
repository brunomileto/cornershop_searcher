import { response, Router } from "express";
import { getCountryController } from "./useCases/GetCountry";
import { getProductsController } from "./useCases/GetProduct";

const router = Router();

router.get("/countries", (request, response) => {
  return getCountryController.handle(request, response);
});

router.post("/allProducts", (request, response) => {
  return getProductsController.handle(request, response);
});

export { router };
