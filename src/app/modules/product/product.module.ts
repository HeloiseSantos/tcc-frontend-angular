import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToastSharedService } from 'app/shared/services/toast-shared.service';

import { ProductRoutingModule } from './product-routing.module';
import { ProductReadComponent } from './product-read/product-read.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDividerModule,
    CurrencyMaskModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    ToastSharedService,
    {
      provide: LOCALE_ID, 
      useValue: "pt-BR"
    }
]
})
export class ProductModule { }
