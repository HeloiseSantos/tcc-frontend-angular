import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    // id: 0,
    name: '',
    type: '',
    // ingredients: "string[]",
    manufacturingDate: '',
    unitPrice: 0,
    quantityProduced: 0,
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    console.log('Produto criado!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
