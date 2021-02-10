import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string, props?: {count: number}): any[] {
    !Array.isArray(value) || !key || !phrase ? value : null;

    const filtered = value.filter(item => {
      typeof item[key] === 'number' && typeof phrase === 'number' ? item[key] === phrase : null;      
      return String(item[key]).toLowerCase().includes(String(phrase).toLowerCase());      
    });

    if (props) {
      if (props.count) {
        props.count = filtered.length;
      }
      if (filtered.length === 0) {
        props.count = 1;
      }
    }

    return filtered;
  }
}