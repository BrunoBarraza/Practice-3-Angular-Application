import { Pipe, PipeTransform } from '@angular/core';

interface IObjectStringValues {
  [index: string]: string;
}

@Pipe({
  name: 'objectValues',
})
export class ObjectValuesPipe implements PipeTransform {
  transform(object: IObjectStringValues | undefined): Array<string> {
    return object ? Object.values(object) : [];
  }
}
