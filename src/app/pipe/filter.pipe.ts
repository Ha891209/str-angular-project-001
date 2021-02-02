import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string): any[] {

    !Array.isArray(value) || !key || !phrase ? value : null;

    return value.filter(item => {
      typeof item[key] === 'number' && typeof phrase === 'number' ? item[key] === phrase : null;
      return String(item[key]).toLowerCase().includes(String(phrase).toLowerCase());
    });
  }
}