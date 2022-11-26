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

  getById(id: number): Promise<HttpResponse<ProductModel>> {
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

  update(product: ProductModel): Promise<HttpResponse<any>> {
    return new Promise((resolve, reject) => {
      this._httpClient.put(`${environment.api}/wines/${product.id}`, product, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }

  delete(product: ProductModel): Promise<HttpResponse<any>> {
    return new Promise((resolve, reject) => {
      this._httpClient.delete(`${environment.api}/wines/${product.id}`, { observe: 'response' })
        .subscribe({
          next: (response: HttpResponse<any>) => resolve(response),
          error: (error: HttpErrorResponse) => reject(error)
        });
    });
  }
}
