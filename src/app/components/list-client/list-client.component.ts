import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/class/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients : Client[]
  constructor() { }

  ngOnInit(): void {
    this.clients = [{
      id:1,
      name: "Ema",
      lastName: "Ochoa",
      email: "eochoa@gmail.com",
      phone: "1234"
    }]
  }

}
