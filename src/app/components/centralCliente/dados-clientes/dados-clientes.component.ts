import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

export interface Cliente {
  id_cliente: string;
  nome_cliente: string;
  tipoPessoa: string;
  email: string;
  cpf: string;
  cpnj: string;
  razaoSocial: string;
  inscricaoEstadual: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  contato: string;
}


@Component({
  selector: 'app-dados-clientes',
  templateUrl: './dados-clientes.component.html',
  styleUrls: ['./dados-clientes.component.scss']
})
export class DadosClientesComponent implements OnInit {

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.obtemDadosCliente();
  }

  dadosCliente: Cliente;

  obtemDadosCliente(){
    this.crud.getData('/cliente/dadosCliente.php').subscribe((res) => {
      this.dadosCliente = res;
      console.log(this.dadosCliente);
    }, err => {
      console.error(err);
    })
  }

  editaCliente(){
    this.router.navigate(['homeClientes/editaCliente', this.dadosCliente.id_cliente]);
  }

}
