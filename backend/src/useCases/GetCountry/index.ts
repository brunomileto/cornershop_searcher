import { CornershopCountriesApiProvider } from "../../providers/implementations/CornershopCountriesApiProvider";
import { GetCountryController } from "./GetCountryController";
import { GetCountryUseCase } from "./GetCountryUseCase";

const getCountryProvider = new CornershopCountriesApiProvider();

const getCountryUseCase = new GetCountryUseCase(getCountryProvider);

const getCountryController = new GetCountryController(getCountryUseCase);

export { getCountryUseCase, getCountryController };
