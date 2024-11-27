import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
})
export class UpdateClientComponent implements OnInit {
  id: number; // Para almacenar el ID del cliente a actualizar
  client: Client = new Client(); // El modelo del cliente a editar

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del cliente desde la ruta
    this.id = this.route.snapshot.params['id'];

    // Cargar los datos del cliente
    this.clientService.getClientById(this.id).subscribe({
      next: (data) => {
        this.client = data;
      },
      error: (err) => {
        console.error('Error al cargar el cliente:', err);
      },
    });
  }

  /**
   * Actualiza el cliente
   */
  updateClient(): void {
    this.clientService.updateClient(this.id, this.client).subscribe({
      next: (data) => {
        console.log('Cliente actualizado:', data);
        this.goToListClients();
      },
      error: (err) => {
        console.error('Error al actualizar el cliente:', err);
      },
    });
  }

  /**
   * Redirige al listado de clientes
   */
  goToListClients(): void {
    this.router.navigate([{ outlets: { clientSection: ['clients'] } }]);
  }

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    this.updateClient();
  }
}
