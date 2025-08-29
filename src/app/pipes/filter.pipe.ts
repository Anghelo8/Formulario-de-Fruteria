// src/app/pipes/filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {
    transform(products: any[], filter: string): any[] {
        if (!products || !filter) {
            return products;
        }
        const term = filter.toLowerCase();
        return products.filter(product =>
            product.name?.toLowerCase().includes(term) ||
            product.category?.toLowerCase().includes(term)
        )   ;
    }
}