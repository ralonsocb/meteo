import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  
    transform(array: any[], page_size: any, page_number: any): any[] {
      if (!array.length) return []
      if(page_size === 'all'){
        return array;
      }

      page_size = page_size || 5
      page_number = page_number || 1
      --page_number


      return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

}
