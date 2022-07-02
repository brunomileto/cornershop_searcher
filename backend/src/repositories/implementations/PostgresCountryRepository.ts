import { Country } from "../../entities/Country";
import { ICountriesRepository } from "../ICountriesRepository";

export class PostgresCountryRepository implements ICountriesRepository {
  private countries: Country[];
  getCountry(): Promise<Country[]> {
    throw new Error("Method not implemented.");
  }
}
