import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[]

  constructor() { }

  ngOnInit(): void {
    this.products = [{
      id: 1,
      name: "Pc",
      description: "Computador portátil",
      price: 2500000,
      quantity:5,
      picture: "pc"
    },
  ]
  }

}
