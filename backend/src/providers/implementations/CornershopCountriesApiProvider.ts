import { Country } from "../../entities/Country";
import { ICountriesProvider } from "../ICountriesProvider";
import axios, { AxiosResponse } from "axios";

export class CornershopCountriesApiProvider implements ICountriesProvider {
  private GET_COUNTRY_URL = "https://cornershopapp.com/api/v1/countries";
  countries: Country[];
  constructor() {}

  private async loadCountry(): Promise<AxiosResponse<any, any>> {
    const response = await axios.get(this.GET_COUNTRY_URL);
    return response;
  }

  async getCountry(): Promise<Country[]> {
    const responseData = (await this.loadCountry()).data;
    const countriesList: Country[] = [];

    responseData.countries.forEach((countryData) =>
      countriesList.push({
        country: countryData.country,
        name: countryData.name,
      })
    );
    this.countries = [...countriesList];
    return this.countries;
  }
}
