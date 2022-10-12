import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductCrudComponent } from './modules/product-crud/product-crud.component';
import { ProductCreateComponent } from './shared/components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './shared/components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './shared/components/product/product-delete/product-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ProductCrudComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/app/modules/product-crud/product-crud.module').then(
            (m) => m.ProductCrudModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ProductCreateComponent,
    children: [
      {
        path: 'products/create',
        loadChildren: () =>
          import('src/app/shared/components/product/product-create/product-create.module').then(
            (m) => m.ProductCreateModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ProductUpdateComponent,
    children: [
      {
        path: 'products/update/:id',
        loadChildren: () =>
          import('src/app/shared/components/product/product-update/product-update.module').then(
            (m) => m.ProductUpdateModule
          ),
      },
    ],
  },
  {
    path: '',
    component: ProductDeleteComponent,
    children: [
      {
        path: 'products/delete/:id',
        loadChildren: () =>
          import('src/app/shared/components/product/product-delete/product-delete.module').then(
            (m) => m.ProductDeleteModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
