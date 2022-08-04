import { Pipe, PipeTransform } from '@angular/core';
import { IMappedCountry } from '../models/mapped-country.model';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(
    countryList: Array<IMappedCountry>,
    init: number,
    limit: number
  ): Array<IMappedCountry> {
    const filteredList: Array<IMappedCountry> = [];
    for (let j = init; j < limit; j++) {
      const currentCountry = countryList[j];
      if (!currentCountry) {
        break;
      } else {
        filteredList.push(currentCountry);
      }
    }
    return filteredList;
  }
}
