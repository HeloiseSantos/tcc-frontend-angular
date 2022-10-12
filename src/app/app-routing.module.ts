import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductCrudComponent } from './modules/product-crud/product-crud.component';
import { ProductCreateComponent } from './shared/components/product/product-create/product-create.component';

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
  // {
  //   path: "products/update/:id",
  //   component: ProductUpdateComponent
  // },
  // {
  //   path: "products/delete/:id",
  //   component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
