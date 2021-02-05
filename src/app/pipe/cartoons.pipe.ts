import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartoons'
})
export class CartoonsPipe implements PipeTransform {

  transform(value: any[]): any[] {

    !Array.isArray(value) ? value : null;

    return value.filter(item => {
      return item.catId === 2;
    });
  }
}
