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
  `,
})
export class AppComponent {
  products = exampleProducts;
}
