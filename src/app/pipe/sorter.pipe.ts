import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {

    !Array.isArray(value) || !key ? value : null;

    return value.sort(function(a, b){
      if (typeof a[key] === "number" && typeof b[key] === "number") {
        return a[key] - b[key];
      } else {
        let a2 = String(a[key]).toLowerCase();
        let b2 = String(b[key]).toLowerCase();
        return a2.localeCompare(b2);
      }
    });
  }

}
