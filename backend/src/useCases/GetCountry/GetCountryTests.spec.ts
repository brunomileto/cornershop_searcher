import axios from "axios";
import { Country } from "../../entities/Country";
import { ICountriesProvider } from "../../providers/ICountriesProvider";
import { CornershopCountriesApiProvider } from "../../providers/implementations/CornershopCountriesApiProvider";
import { GetCountryUseCase } from "./GetCountryUseCase";

class GetCountryMock implements ICountriesProvider {
  countries: Country[];
  private GET_COUNTRY_URL = "https://cornershopapp.com/api/v1/countries";

  async getCountry(): Promise<Country[]> {
    const responseData = (await axios.get(this.GET_COUNTRY_URL)).data;
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

describe("GetCountryTests", () => {
  it("should return a list of countries", async () => {
    // #Arrange
    const getCountryProvider = new GetCountryMock();
    const sut = new GetCountryUseCase(getCountryProvider);
    // #Act
    await sut.execute();
    // #Assert
    expect(getCountryProvider.countries).toBeTruthy;
  });
});
