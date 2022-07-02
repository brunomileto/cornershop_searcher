import { Request, Response } from "express";
import { GetProductsUseCase } from "./GetProductsUseCase";

export class GetProductsController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { searchTerm, cep, country } = request.body;
      const products = [
        ...(await this.getProductsUseCase.execute(searchTerm, cep, country)),
      ];
      return response.status(200).json(products);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error." });
    }
  }
}
