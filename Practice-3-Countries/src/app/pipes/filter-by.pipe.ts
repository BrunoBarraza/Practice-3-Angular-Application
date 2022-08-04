import { Pipe, PipeTransform } from '@angular/core';
import { IMappedCountry } from '../models/mapped-country.model';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(countryList: IMappedCountry[], searchBy: string): IMappedCountry[] {
    //This prevents the filter to be applied is there is not data. Extra logic.
    if (!countryList || !searchBy) {
      return countryList;
    }
    return countryList.filter(
      (country) =>
        country.official_name
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase()) ||
        country.capital
          ?.toString()
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase()) ||
        country.region
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase()) ||
        country.language
          ?.toString()
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase()) ||
        country.population
          .toString()
          .toLocaleLowerCase()
          .includes(searchBy.toLocaleLowerCase())
    );
  }
}
