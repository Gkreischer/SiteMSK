import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

export interface OrdemDeServico {
  id_ordem: string;
  nome_equipamento: string;
  problema_relatado: string;
  obs: string;
  data: string
}

@Component({
  selector: 'app-ordens-servico',
  templateUrl: './ordens-servico.component.html',
  styleUrls: ['./ordens-servico.component.scss']
})
export class OrdensServicoComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.obtemOrdensCliente();
  }

  ordensCliente: OrdemDeServico[] = [];

  obtemOrdensCliente(){
    this.crud.getData('/cliente/ordensCliente.php').subscribe((res) => {
      console.log(res);
      this.ordensCliente = res;
      this.ordensCliente = this.ordensCliente.reverse();
    }, err => {
      console.error(err);
    })
  }

}
