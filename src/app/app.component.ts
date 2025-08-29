import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent],
  template: `
    <app-header></app-header>
    <app-product-list></app-product-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
