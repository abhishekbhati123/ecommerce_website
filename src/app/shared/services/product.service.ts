import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${this.url}/products`);
  }

  createProduct(product: any) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(
      `${this.url}/products/`,
      JSON.stringify(product),
      this.httpOptions
    );
  }
}
