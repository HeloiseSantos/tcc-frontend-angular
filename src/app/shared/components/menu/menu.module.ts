import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule 
  ],
  exports: [
    MenuComponent
  ],
})
export class MenuModule { }
