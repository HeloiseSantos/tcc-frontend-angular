import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageTitleComponent } from './page-title.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  exports: [
    PageTitleComponent
  ]
})
export class PageTitleModule { }
