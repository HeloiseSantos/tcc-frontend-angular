import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.api}/wines`).subscribe((retorno) => {
        return resolve(retorno);
      })
    });
  }

  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${environment.api}/wines`).pipe(
  //     map((obj) => obj),
  //     catchError((error) => this.errorHandler(error))
  //   );
  // }
}
