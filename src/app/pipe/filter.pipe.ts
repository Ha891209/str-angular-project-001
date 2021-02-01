import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any[], phrase: string, key: string = ''): any {
    !Array.isArray(value) || !phrase || !key ? value : null;
    return value.filter(item => String(item[key]).toLowerCase().includes(phrase.toLowerCase()) ? true : false);
  }
}
