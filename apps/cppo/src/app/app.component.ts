import { exampleProducts } from './../../../../libs/products/src/lib/products';
import { Component } from '@angular/core';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = exampleProducts;
}
