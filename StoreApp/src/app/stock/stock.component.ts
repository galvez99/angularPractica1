import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  products: Array<Product> = [
    new Product("P1", "Comic Predicador 1", 35, 18),
    new Product("P2", "Marvel Deluxe Hulk", 10, 40),
    new Product("P3", "Figura Ghostface", 20, 210),
    new Product("P4", "Figura Neca Chucky", 40, 60),
    new Product("P5", "Estatua Jason Vorhess", 8, 999)
  ];

  product: Product = new Product("", "", 0, 0);

  private productAlreadyExists(code: string): boolean {
    return this.products.some(product => product.code === code);
  }

  addProduct(product: Product): void {
    if (!this.productAlreadyExists(product.code)) {
      this.products.push(new Product(product.code, product.description, product.quantity, product.price));
    } else {
      alert("Este ya existe. Por favor, elija otro");
    }
  }

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  selectProduct(product: Product): void {
    this.product = { ...product };
  }

  modifyProduct(modifiedProduct: Product): void {
    const index = this.products.findIndex(product => product.code === this.product.code);
    if (index !== -1) {
      this.products[index] = { ...modifiedProduct };
    } else {
      alert("El código que has introducido no existe");
    }
  }
}
