import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductCrudComponent } from './product-crud.component';

@NgModule({
  declarations: [
    ProductCrudComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
    
  ],
  exports: [
    ProductCrudComponent
  ]
})
export class ProductCrudModule { }
