import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create.component';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductCreateComponent
  ]
})
export class ProductCreateModule { }
