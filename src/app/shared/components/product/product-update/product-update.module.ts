import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProductUpdateComponent } from './product-update.component';

@NgModule({
  declarations: [
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ProductUpdateComponent
  ]
})
export class ProductUpdateModule { }
