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
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ListClientComponent,
    RegisterProductComponent,
    RegisterClientComponent
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
