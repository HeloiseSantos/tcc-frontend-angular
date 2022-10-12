import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    console.log('Produto excluído!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
