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
}
