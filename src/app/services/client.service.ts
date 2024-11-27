import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../class/client';
import { Observable } from 'rxjs';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

   private baseURL = "http://localhost:8080/api/v1/clients"

  constructor(
    private httpClient: HttpClient
  ) { }

      //Esta URL obtiene todos los clientes del backen-bd
      getAllClients(): Observable<Client[]>{
        return this.httpClient.get<Client[]>(`${this.baseURL}`)
      }

        //Crea o añade un nuevo client
      postClient(client:Client): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, client)
      }
      
      //Buscar cliente por id
      getClientById(id:number):Observable<Client>{
        return this.httpClient.get<Client>(`${this.baseURL}/${id}`)
       }

       //Actualiza un cliente
       updateClient(id:number, client:Client):Observable<Client>{
        return this.httpClient.put<Client>(`${this.baseURL}/${id}`, client);

       }

       //Eliminar un producto
       deleteClient(id:number):Observable<Object>{
          return this.httpClient.delete(`${this.baseURL}/${id}`)
       }


}
