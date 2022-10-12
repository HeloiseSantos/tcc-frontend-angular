import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MenuModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }