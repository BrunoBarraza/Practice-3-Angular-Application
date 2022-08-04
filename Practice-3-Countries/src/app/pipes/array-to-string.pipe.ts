import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(stringArr: Array<string> | undefined): string {
    return stringArr && stringArr.length > 0
      ? stringArr.join(', ')
      : 'No data to display';
  }
}
