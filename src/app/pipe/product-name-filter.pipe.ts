import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {

  transform(name: string): any {
    return null;
  }

}
