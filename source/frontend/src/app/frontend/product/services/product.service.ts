import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/products`);
  }

  filterProducts(data: object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/products/filter`, data)
  }
}
