import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { ProductReadComponent } from './product-read.component';

@NgModule({
  declarations: [
    ProductReadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    ProductReadComponent
  ]
})
export class ProductReadModule { }
