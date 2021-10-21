import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosClientesComponent } from './components/centralCliente/dados-clientes/dados-clientes.component';
import { EditaClienteComponent } from './components/centralCliente/dados-clientes/edita-cliente/edita-cliente.component';
import { HomeClientesComponent } from './components/centralCliente/home-clientes/home-clientes.component';
import { LoginComponent } from './components/centralCliente/login/login.component';
import { OrdensServicoComponent } from './components/centralCliente/ordens-servico/ordens-servico.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'homeClientes', component: HomeClientesComponent,
    children: [
      {
        path: 'ordensServico', component: OrdensServicoComponent
      },
      {
        path: 'dadosCliente', component: DadosClientesComponent,
      },
      {
        path: 'editaCliente/:id', component: EditaClienteComponent
      }
    ]
  },
  {
    path: 'login', component: LoginComponent, 
  },
  {
    path: '**', component: PaginaNaoEncontradaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
