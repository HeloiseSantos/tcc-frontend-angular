import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProductDeleteComponent } from './product-delete.component';

@NgModule({
  declarations: [
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ProductDeleteComponent
  ]
})
export class ProductDeleteModule { }
