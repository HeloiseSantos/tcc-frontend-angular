import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: "Vinho tinto",
      type: "Vinho tinto",
      // ingredients: "string[]",
      manufacturingDate: "17/10/2022",
      unitPrice: 50.00,
      quantityProduced: 130,
    },
    {
      id: 2,
      name: "Vinho rosé",
      type: "Vinho rosé",
      // ingredients: "string[]",
      manufacturingDate: "17/10/2022",
      unitPrice: 60.00,
      quantityProduced: 100,
    },
    {
      id: 3,
      name: "Vinho azul",
      type: "Vinho azul",
      // ingredients: "string[]",
      manufacturingDate: "17/10/2022",
      unitPrice: 80.00,
      quantityProduced: 100,
    },
    {
      id: 1,
      name: "Vinho branco",
      type: "Vinho branco",
      // ingredients: "string[]",
      manufacturingDate: "17/10/2022",
      unitPrice: 40.00,
      quantityProduced: 80,
    }
];

  constructor() { }

  getAll() {
    return this.products;
  }
}
