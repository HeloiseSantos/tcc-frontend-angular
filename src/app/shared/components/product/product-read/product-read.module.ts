import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductReadComponent } from './product-read.component';

@NgModule({
  declarations: [
    ProductReadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductReadComponent
  ]
})
export class ProductReadModule { }
