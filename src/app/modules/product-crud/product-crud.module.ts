import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCrudComponent } from './product-crud.component';

@NgModule({
  declarations: [
    ProductCrudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCrudComponent
  ]
})
export class ProductCrudModule { }
