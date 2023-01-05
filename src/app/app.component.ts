import { exampleProducts } from '@angular-app/products';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-app-root',
  template: `
    <angular-app-banner title="Welcome to the app!"></angular-app-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>
    <angular-app-button></angular-app-button>
  `,
})
export class AppComponent {
  products = exampleProducts;
}
