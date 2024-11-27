import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../class/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  // Obtener todos los productos
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  // Crear un nuevo producto
  registerProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  // Obtener un producto por ID
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  // Actualizar un producto
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseURL}/${id}`, product);
  }

  // Eliminar un producto
  deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
