import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Promise<HttpResponse<ProductModel[]>> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.api}/wines`, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<ProductModel[]>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }

  getById(id: string): Promise<HttpResponse<ProductModel>> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.api}/wines/${id}`, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<ProductModel>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        })
    });
  }

  create(product: ProductModel): Promise<HttpResponse<any>> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`${environment.api}/wines`, product, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }

  update(product: ProductModel): Promise<HttpResponse<ProductModel>> {
    return new Promise((resolve, reject) => {
      this._httpClient.put(`${environment.api}/wines/${product._id}`, product, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }

  delete(_id: string): Promise<HttpResponse<any>> {
    return new Promise((resolve, reject) => {
      this._httpClient.delete(`${environment.api}/wines/${_id}`, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }
}
