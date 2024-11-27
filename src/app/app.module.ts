import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ListClientComponent,
    RegisterProductComponent,
    RegisterClientComponent,
    UpdateProductComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
