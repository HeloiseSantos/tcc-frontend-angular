import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ProductReadComponent } from "./product-read/product-read.component";
import { ProductUpdateComponent } from "./product-update/product-update.component";

const routes: Routes = [
    {
        path: '',
        component: ProductReadComponent,
    },
    {
        path: 'create',
        component: ProductCreateComponent,
    },
    {
        path: 'update/:id',
        component: ProductUpdateComponent,
    },
    {
        path: 'delete/:id',
        component: ProductDeleteComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule{}