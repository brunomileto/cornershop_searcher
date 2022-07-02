import { Country } from "../../entities/Country";
import { ICountriesProvider } from "../../providers/ICountriesProvider";

export class GetCountryUseCase {
  private countriesProvider: ICountriesProvider;
  countriesList: Country[];

  constructor(countriesProvider: ICountriesProvider) {
    this.countriesProvider = countriesProvider;
  }

  async execute(): Promise<Country[]> {
    this.countriesList = [...(await this.countriesProvider.getCountry())];
    if (this.countriesList.length === 0) {
      const emptyCountryList: Country[] = [{ country: "", name: "" }];
      return emptyCountryList;
    }
    return this.countriesList;
  }
}
