import { Request, Response } from "express";
import { GetCountryUseCase } from "./GetCountryUseCase";

export class GetCountryController {
  constructor(private getCountryUseCase: GetCountryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const countries = [...(await this.getCountryUseCase.execute())];
      return response.status(200).json(countries);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
