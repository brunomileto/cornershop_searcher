// // use case
// class GetProductData {
//   private getProductDataMock: GetProductDataMock;

//   constructor(getProductDataMock: GetProductDataMock) {
//     this.getProductDataMock = getProductDataMock;
//   }

//   getProductData = (cep: string, country: string) => {
//     this.getProductDataMock.getProduct(cep, country);
//   };
// }

// // --------------->>
// interface GetProductDataRepositoryConstructor {
//   new (countriesList: string): GetCountriesRepository;
// }
// interface GetProductDataRepository {
//   getProduct(cep: string, country: string): Promise<void>;
// }
// class GetProductDataMock implements GetProductDataRepository {
//   private countriesList?: string;
//   country?: string;
//   cep?: string;
//   constructor(countriesList?: string) {
//     this.countriesList = countriesList;
//   }
//   async getProduct(cep: string, country: string): Promise<void> {
//     this.cep = cep;
//     this.country = country;
//   }
// }

// // -------------->>
// interface GetCountriesRepository {
//   countriesList?: string;
// }
// class GetCountriesMock implements GetCountriesRepository {
//   countriesList?: string;
// }

// describe("GetProductData", () => {
//   it("should inform a CEP", async () => {
//     // #Arrange
//     const getProductDataMock = new GetProductDataMock();
//     const sut = new GetProductData(getProductDataMock);

//     // #Act
//     await sut.getProductData("a_cep");

//     // #Assert
//     expect(getProductDataMock.cep).toBe("a_cep");
//   });

//   it("should inform a correct country", async () => {
//     // #Arrange
//     const getCountriesMock = new GetCountriesMock();
//     const getProductDataMock = new GetProductDataMock(
//       getCountriesMock.countriesList
//     );
//     const sut = new GetProductData(getProductDataMock);

//     // #Act
//     await sut.getProductData("a_cep", "some_country");

//     // #Assert
//     expect(getProductDataMock.country).toBe("some_country");
//   });
// });
