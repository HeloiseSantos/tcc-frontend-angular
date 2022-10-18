import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProductCrudComponent } from './product-crud.component';
import { ProductReadModule } from 'src/app/shared/components/product/product-read/product-read.module';

@NgModule({
  declarations: [
    ProductCrudComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ProductReadModule
  ],
  exports: [
    ProductCrudComponent
  ]
})
export class ProductCrudModule { }
