import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = new Product();  // Inicializa el producto vacío

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.obtenerProducto();  // Llamada para obtener el producto cuando se inicializa el componente
  }

  /**
   * Obtiene el producto a través del parámetro 'id' en la ruta activa
   */
  // obtenerProducto(): void {
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     const productId = params.get('id');  // Obtener el 'id' desde la URL
  //     if (productId) {
  //       this.productService.getProductById(productId).subscribe({
  //         next: (res) => {
  //           console.log('Producto obtenido con éxito:', res);
  //           this.product = res;  // Asigna el producto obtenido al objeto 'product'
  //         },
  //         error: (err) => {
  //           console.error('Error al obtener el producto:', err);
  //         }
  //       });
  //     } else {
  //       console.error('No se encontró el id del producto en la URL');
  //     }
  //   });
  // }

  // /**
  //  * Actualiza el producto utilizando el servicio de ProductService
  //  */
  // actualizarProducto(): void {
  //   this.productService.updateProduct(this.product).subscribe({
  //     next: (res) => {
  //       console.log('Producto actualizado con éxito:', res);
  //       this.redirigirListaProducto();  // Redirige a la lista de productos después de la actualización
  //     },
  //     error: (err) => {
  //       console.error('Error al actualizar el producto:', err);
  //     }
  //   });
  // }

  // /**
  //  * Redirige a la lista de productos
  //  */
  // redirigirListaProducto(): void {
  //   this.router.navigate([{ outlets: { productSection: ['products'] } }]);  // Redirige a la lista de productos
  // }

  // /**
  //  * Maneja el envío del formulario
  //  */
  // onSubmit(): void {
  //   console.log('Datos del producto enviados:', this.product);
  //   this.actualizarProducto();  // Llama al servicio para actualizar el producto
  // }

}
