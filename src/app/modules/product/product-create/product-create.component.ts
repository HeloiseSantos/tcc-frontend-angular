import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastSharedService } from 'app/shared/services/toast-shared.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form: UntypedFormGroup;
  unitPrice: number;
  quantityProduced: number;

  constructor(
    private _service: ProductService,
    private _toast: ToastSharedService,
    private _router: Router,
    private _formBuilder: UntypedFormBuilder, 
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): UntypedFormGroup {
    return this._formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      manufacturingDate: ['', [Validators.required]],
      unitPrice: [this.unitPrice, [Validators.required]],
      quantityProduced: [this.quantityProduced, [Validators.required]],
    });
  }

  async create(data: any): Promise<void> {
    try {
      await this._service.create({ ...data });
      this._toast.openSuccess('Produto adicionado com sucesso!');
      this._router.navigate(['/product']);
    } catch (error) {
      this._toast.openError('Falha ao adicionar produto. Tente novamente!');
    }
  }

  save(){
    if(this.form.valid) {
      const data = this.form.getRawValue();

      this.create(data);
    } else {
      this._toast.openError('Dados do formulário inválido. Revise os dados e tente novamente!');
    }
  }
}
