import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';
}
