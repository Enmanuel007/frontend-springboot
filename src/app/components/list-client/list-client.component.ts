import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  // Método para obtener todos los clientes
  getClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error('Error al cargar clientes:', err);
      },
    });
  }

  // Método público para navegar a la edición
  navigateToUpdateClient(id: number): void {
    this.router.navigate([{ outlets: { clientSection: ['update-client', id] } }]);
  }

  // Método para eliminar un cliente
  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe({
      next: () => {
        console.log('Cliente eliminado');
        this.getClients(); // Refrescar la lista
      },
      error: (err) => {
        console.error('Error al eliminar cliente:', err);
      },
    });
  }
}
