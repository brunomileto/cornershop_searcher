import { Country } from "../entities/Country";

export interface ICountriesRepository {
  getCountry(): Promise<Country[]>;
}
