import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Guarda un nuevo producto utilizando el servicio de producto
   */
  guardarProducto(): void {
    this.productService.registerProduct(this.product).subscribe({
      next: (res) => {
        console.log('´Producto guardado con éxito:', res);
        this.redirigirListaProducto();
      },
      error: (err) => {
        console.error('Error al guardar el empleado:', err);
      }
    });
  }

  /**
   * Redirige a la lista de empleados
   */
  redirigirListaProducto(): void {
    // this.router.navigate(['/products']);
    this.router.navigate([{ outlets: { productSection: ['products'] } }]);
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    console.log('Datos del product enviados:', this.product);
    this.guardarProducto();
  }

}
