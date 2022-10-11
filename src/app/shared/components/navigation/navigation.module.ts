import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    NavigationComponent
  ],
})
export class NavigationModule { }
