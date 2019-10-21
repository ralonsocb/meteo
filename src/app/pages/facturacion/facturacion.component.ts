import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styles: []
})
export class FacturacionComponent implements OnInit {

  clientes: Cliente[] = [];
  usuario: Usuario;

  constructor(private clienteService: ClienteService, private usuarioService: UsuarioService) {

    this.usuario = this.usuarioService.usuario;
    for ( let id of this.usuarioService.usuario.clientes){
      this.clienteService.getCliente(String(id))
          .subscribe( (resp: Cliente) => {
            console.log(resp.cliente);
            this.clientes.push(resp.cliente);
          });
    }
   }

  ngOnInit() {
  }

}
