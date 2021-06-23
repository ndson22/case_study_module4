import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getListProducts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/products`);
  }
  getDetailProduct(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/products/detail/${id}`);
  }
}
