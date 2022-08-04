import { Pipe, PipeTransform } from '@angular/core';
import { IMappedCountry } from '../models/mapped-country.model';

export type TSort = 'ASC' | 'DESC';
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    countryList: Array<IMappedCountry>,
    sortType: TSort
  ): Array<IMappedCountry> {
    const asc = (a: IMappedCountry, b: IMappedCountry) =>
      a.official_name.localeCompare(b.official_name);
    const desc = (a: IMappedCountry, b: IMappedCountry) =>
      b.official_name.localeCompare(a.official_name);
    return [...countryList].sort(sortType === 'ASC' ? asc : desc);
  }
}
