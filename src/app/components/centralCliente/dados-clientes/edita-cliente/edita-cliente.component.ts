import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Cliente } from '../dados-clientes.component';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss']
})
export class EditaClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private crud: CrudService, private fb: FormBuilder) {
    this.route.params.subscribe((params) => {
      this.idCliente = params['id'];
    })
   }

  ngOnInit(): void {
    this.montaForm();
    this.obtemInfoCliente();
    console.log(this.dadosForamAtualizados);
  }

  idCliente: string;
  dadosCliente: Cliente;
  formDadosCliente: FormGroup;
  dadosForamAtualizados:boolean = null;

  montaForm(){
    this.formDadosCliente = this.fb.group({
      id_cliente: this.idCliente,
      nome_cliente: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cpf: '',
      cnpj: '',
      tipoPessoa: '',
      inscricaoEstadual: '',
      razaoSocial: '',
      cep: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      contato: ['', [Validators.required]]
    });
  }

  obtemInfoCliente(){
    this.crud.getData('/cliente/dadosCliente.php').subscribe((res) => {
      this.dadosCliente = res;
      console.log(this.dadosCliente);
      this.insereDadosRecebidosNoFormulario();
    }, err => {
      console.error(err);
    })
  }

  editaDadosCliente(){
    this.crud.postData('/cliente/editaCliente.php', this.formDadosCliente.value).subscribe((res) => {
      this.dadosForamAtualizados = res;
    }, err => {
      console.log(err);
    })
  }

  insereDadosRecebidosNoFormulario(){
    this.formDadosCliente.patchValue(this.dadosCliente);
  }

}
