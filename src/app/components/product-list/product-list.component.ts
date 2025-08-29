import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProductFormComponent, FilterPipe]
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Manzana', price: 3.5, description: 'Roja y crujiente', category: 'Fruta', quantity: 50 },
    { name: 'Zanahoria', price: 2.0, description: 'Naturaleza en raíz', category: 'Verdura', quantity: 10 },
    { name: 'Agua Mineral', price: 1.5, description: 'Pura y fresca', category: 'Bebida', quantity: 80 }
  ];

  filterValue: string = '';

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(index: number) {
    if (confirm(`¿Eliminar ${this.products[index].name}?`)) {
      this.products.splice(index, 1);
    }
  }

  isLowStock(product: Product): boolean {
    return product.quantity < 15;
  }
}