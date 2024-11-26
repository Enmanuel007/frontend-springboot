import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  client: Client = new Client();
  
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Guarda un nuevo client utilizando el servicio de clientService
   */
  guardarCliente(): void {
    this.clientService.postClient(this.client).subscribe({
      next: (res) => {
        console.log('Client guardado con éxito:', res);
        this.redirigirListaClientes();
      },
      error: (err) => {
        console.error('Error al guardar el client:', err);
      }
    });
  }

  /**
   * Redirige a la lista de clientes
   */
  redirigirListaClientes(): void {
    // this.router.navigate(['/clients']);
    this.router.navigate([{ outlets: { clientSection: ['clients'] } }]);
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    console.log('Datos del cliente enviados:', this.client);
    this.guardarCliente();
  }

}
