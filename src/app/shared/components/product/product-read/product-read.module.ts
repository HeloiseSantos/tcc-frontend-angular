import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ProductReadComponent } from './product-read.component';

@NgModule({
  declarations: [
    ProductReadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    ProductReadComponent
  ]
})
export class ProductReadModule { }
