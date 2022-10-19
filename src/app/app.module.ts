import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { PageTitleModule } from './shared/components/page-title/page-title.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { MenuModule } from './shared/components/menu/menu.module';
import { HomeModule } from './modules/home/home.module';
import { ProductCrudModule } from './modules/product-crud/product-crud.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    PageTitleModule,
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
