import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private productService: ProductService,
    private router: Router
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

  updateProduct(id: number){
    this.router.navigate([{ outlets: { productSection: ['update-product', id] } }]);
  }

  //Eliminar un producto
  deleteProduct(id:number){
     this.productService.deleteProduct(id).subscribe(
      res => {
        console.log(res) 
        this.getProducts()
      })
  }

}
