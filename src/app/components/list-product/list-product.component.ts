import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // Método para obtener todos los productos
  getProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }

  // Método público para navegar a la edición
  navigateToUpdateProduct(id: number): void {
    this.router.navigate([{ outlets: { productSection: ['update-product', id] } }]);
  }

  // Método para eliminar un producto
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Producto eliminado');
        this.getProducts(); // Refrescar la lista
      },
      error: (err) => {
        console.error('Error al eliminar producto:', err);
      },
    });
  }
}
