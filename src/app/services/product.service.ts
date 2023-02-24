import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product_data = 'https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json';
  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.product_data);
  }

}
