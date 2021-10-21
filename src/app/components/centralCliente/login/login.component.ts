import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

export interface Login {
  email: string;
  senha: string;
  token: string;
  tipoUsuario: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) { }

  formLogin: FormGroup;
  dadosRecebidos: Login;

  ngOnInit(): void {
    this.montaForm();
  }

  montaForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  enviaDadosLogin(){
    this.crud.login('/login/login.php', this.formLogin.value).subscribe((res) => {
    this.dadosRecebidos = res;
    console.log(this.dadosRecebidos);
    if(this.dadosRecebidos.token?.length === 32){
      this.router.navigate(['homeClientes/dadosCliente']);
      localStorage.setItem('token', this.dadosRecebidos.token);
      localStorage.setItem('email', this.dadosRecebidos.email);
      localStorage.setItem('tipoUsuario', this.dadosRecebidos.tipoUsuario);
    } else {
      return;
    }
    }, err => {
      console.log(err);
    })
  }

}
