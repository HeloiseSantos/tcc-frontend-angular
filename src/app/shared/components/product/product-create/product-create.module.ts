import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductCreateComponent } from './product-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    ProductCreateComponent
  ]
})
export class ProductCreateModule { }
