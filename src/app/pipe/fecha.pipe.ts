import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return  value.toDate();
  }
    return null;
  }

}
