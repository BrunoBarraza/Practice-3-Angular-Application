import { Languages } from "./country.model";

export interface IMappedCountry {
  official_name: string;
  capital: string[] | undefined;
  region: string;
  language: Languages | undefined;
  population: number;
  flag: string;
}
