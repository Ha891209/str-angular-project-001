import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any[], key: string, phrase: string): any[] {

    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    return value.filter(item => {
      
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      phrase = ('' + phrase).toLowerCase();
      return ('' + item[key]).toLowerCase().includes(phrase);
    });

  }
}
