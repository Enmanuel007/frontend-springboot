import { Component, OnInit } from '@angular/core';
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
    private clientsService:   ClientService
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

}
