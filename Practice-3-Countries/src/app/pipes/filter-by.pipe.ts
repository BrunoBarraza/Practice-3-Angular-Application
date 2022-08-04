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
        country.official_name.toLowerCase().includes(searchBy.toLowerCase()) ||
        country.capital
          ?.toString()
          .toLowerCase()
          .includes(searchBy.toLowerCase()) ||
        country.region.toLowerCase().includes(searchBy.toLowerCase()) ||
        country.language
          ?.toString()
          .toLowerCase()
          .includes(searchBy.toLowerCase()) ||
        country.population
          .toString()
          .toLowerCase()
          .includes(searchBy.toLowerCase())
    );
  }
}
