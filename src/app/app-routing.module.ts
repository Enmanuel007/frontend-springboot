import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent, outlet: 'productSection' },
  { path: 'register-product', component: RegisterProductComponent, outlet: 'productSection' },
  { path: 'clients', component: ListClientComponent, outlet: 'clientSection' },
  { path: 'register-client', component: RegisterClientComponent, outlet: 'clientSection' },
  { path: '', redirectTo: '/(productSection:products//clientSection:clients)', pathMatch: 'full' },
  // {path: '', redirectTo: 'product', pathMatch: 'full'},
  // { path: '**', redirectTo: '/product' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
