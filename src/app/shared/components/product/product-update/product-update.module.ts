import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUpdateComponent } from './product-update.component';

@NgModule({
  declarations: [
    ProductUpdateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductUpdateComponent
  ]
})
export class ProductUpdateModule { }
