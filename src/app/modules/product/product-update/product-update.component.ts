import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastSharedService } from 'app/shared/services/toast-shared.service';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: ProductModel;
  form: UntypedFormGroup;
  unitPrice: number;
  quantityProduced: number;

  constructor(
    private _service: ProductService,
    private _toast: ToastSharedService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: UntypedFormBuilder, 
  ) {
    this.form = this.createForm();
  }

  async ngOnInit(): Promise<void> {
      const id = this._route.snapshot.paramMap.get('id');

      let response = undefined;

      try {
        response = await this._service.getById(id);

        if (response && response.status === 200) {
          this.product = response.body;
          this.form.patchValue({ ...this.product });
        } else {
          this._toast.openError('Dados não carregados!');
        }
      } catch (error) {
        this._toast.openError('Falha ao carregar dados!');
      }
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

  async update(data: any): Promise<void> {
    try {
      await this._service.update({ ...data });
      this._toast.openSuccess('Produto salvo com sucesso!');
      this._router.navigate(['/products']);
    } catch (error) {
      this._toast.openError('Falha ao adicionar produto. Por favor, tente novamente!');
    }
  }

  save(){
    if(this.form.valid) {
      const data = this.form.getRawValue();

      this.update(data);
    } else {
      this._toast.openError('Os dados do formulário estão inválidos! Revise-os e tente novamente!');
    }
  }
}
