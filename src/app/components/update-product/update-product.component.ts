import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  id: number; // ID del producto
  product: Product = new Product(); // Modelo del producto

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID desde la ruta
    this.id = this.route.snapshot.params['id'];

    // Cargar el producto desde el servicio
    this.productService.getProductById(this.id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.error('Error al cargar el producto:', err);
      },
    });
  }

  // Actualizar el producto
  updateProduct(): void {
    this.productService.updateProduct(this.id, this.product).subscribe({
      next: () => {
        console.log('Producto actualizado');
        this.goToListProducts();
      },
      error: (err) => {
        console.error('Error al actualizar el producto:', err);
      },
    });
  }

  // Redirigir al listado de productos
  goToListProducts(): void {
    this.router.navigate([{ outlets: { productSection: ['products'] } }]);
  }

  // Manejo del formulario
  onSubmit(): void {
    this.updateProduct();
  }
}
