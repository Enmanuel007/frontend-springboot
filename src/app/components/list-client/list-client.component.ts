import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients : Client[]
  constructor(
    private clientsService:   ClientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.clients = [{
    //   id:1,
    //   name: "Ema",
    //   lastName: "Ochoa",
    //   email: "eochoa@gmail.com",
    //   phone: "1234"
    // }]

    this.getClients()
  }

  private getClients(){
    this.clientsService.getAllClients().subscribe(
      res => {this.clients = res}
    )
  }

  //Actualizar un cliente
  updateClients(id: number){
    this.router.navigate([{ outlets: { clientSection: ['update-client', id] } }]);
  }


  //Eliminar un cliente
  deleteClient(id:number){
    this.clientsService.deleteClient(id).subscribe(
     res => {
       console.log(res) 
       this.getClients()
     })
 }

}
