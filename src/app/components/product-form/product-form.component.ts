import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Product {
  name: string;
  price: number;
  description: string;
  category: 'Fruta' | 'Verdura' | 'Bebida';
  quantity: number;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductFormComponent {
  @Output() addProduct = new EventEmitter<Product>();

  name: string = '';
  price: number | null = null;
  description: string = '';
  category: 'Fruta' | 'Verdura' | 'Bebida' = 'Fruta';
  quantity: number | null = null;

  categories = ['Fruta', 'Verdura', 'Bebida'] as const;

  onSubmit() {
    if (!this.name || !this.price || !this.description || !this.category || !this.quantity) {
      alert('Por favor completa todos los campos');
      return;
    }

    const newProduct: Product = {
      name: this.name,
      price: this.price!,
      description: this.description,
      category: this.category,
      quantity: this.quantity!
    };

    this.addProduct.emit(newProduct);
    alert(`✅ ${this.name} agregado exitosamente`);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.price = null;
    this.description = '';
    this.category = 'Fruta';
    this.quantity = null;
  }
}