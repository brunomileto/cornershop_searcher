import { Country } from "../entities/Country";

export interface ICountriesProvider {
  countries: Country[];
  getCountry(): Promise<Country[]>;
}
