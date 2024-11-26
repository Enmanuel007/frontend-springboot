import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListClientComponent } from './components/list-client/list-client.component';

const routes: Routes = [
  {path: 'products', component: ListProductComponent},
  {path: 'clients', component: ListClientComponent},
  //{path: 'crear-empleado', component: CrearEmpleadoComponent},
  // {path: '', redirectTo: 'empleados', pathMatch: 'full'},
  // { path: '**', redirectTo: '/empleados' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
