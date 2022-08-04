import { ICountry } from '../models/country.model';
import { IMappedCountry } from '../models/mapped-country.model';

export class Mappers {
  public static mapDataToTable(unMapped: ICountry): IMappedCountry {
    return {
        official_name: unMapped.name.official,
        capital: unMapped.capital,
        region: unMapped.region,
        population: unMapped.population,
        language: unMapped.languages,
        flag: unMapped.flag,
    }
  };
}
