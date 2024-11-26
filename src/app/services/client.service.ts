import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../class/client';
import { Observable } from 'rxjs';

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

}
