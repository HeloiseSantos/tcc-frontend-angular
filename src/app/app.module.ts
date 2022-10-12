import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { MenuModule } from './shared/components/menu/menu.module';
import { HomeModule } from './modules/home/home.module';
import { ProductCrudModule } from './modules/product-crud/product-crud.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    MenuModule,
    HomeModule,
    ProductCrudModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
