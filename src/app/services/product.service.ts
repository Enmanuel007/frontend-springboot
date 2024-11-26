import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../class/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private baseURL = "http://localhost:8080/api/v1/products"

  constructor(
    private httpClient: HttpClient
  ) { }

    //Esta URL obtiene todos los productos del backen-bd
    getAllProducts(): Observable<Product[]>{
      return this.httpClient.get<Product[]>(`${this.baseURL}`)
    }

}
