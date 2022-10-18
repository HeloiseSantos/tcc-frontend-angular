import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/shared/components/page-title/page-title.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private pageTitleService: PageTitleService
  ) {
    pageTitleService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
