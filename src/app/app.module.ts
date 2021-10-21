import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/centralCliente/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeClientesComponent } from './components/centralCliente/home-clientes/home-clientes.component';
import { NavbarClientesComponent } from './components/centralCliente/navbar-clientes/navbar-clientes.component';
import { OrdensServicoComponent } from './components/centralCliente/ordens-servico/ordens-servico.component';
import { DadosClientesComponent } from './components/centralCliente/dados-clientes/dados-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { EditaClienteComponent } from './components/centralCliente/dados-clientes/edita-cliente/edita-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SobreComponent,
    ServicosComponent,
    ContatoComponent,
    LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    HomeClientesComponent,
    NavbarClientesComponent,
    OrdensServicoComponent,
    DadosClientesComponent,
    EditaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
