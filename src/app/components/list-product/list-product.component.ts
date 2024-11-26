import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    //   this.products = [{
    //     id: 1,
    //     name: "Pc",
    //     description: "Computador portátil",
    //     price: 2500000,
    //     quantity:5,
    //     picture: "pc"
    //   },
    // ]
    
    this.getProducts()
  }

  private getProducts(){
    this.productService.getAllProducts().subscribe(
      res => {this.products = res}
    )
  }

}
