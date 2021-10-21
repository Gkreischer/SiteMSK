import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-clientes',
  templateUrl: './home-clientes.component.html',
  styleUrls: ['./home-clientes.component.scss']
})
export class HomeClientesComponent implements OnInit {

  constructor(private route: Router) {
    this.rotaAtual = this.route.url;
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#f5f9ff';
  }

  rotaAtual: string;

}
