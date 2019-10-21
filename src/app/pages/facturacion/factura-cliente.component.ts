import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroFacturacion } from '../../models/registroFacturacion.model';

@Component({
  selector: 'app-factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styles: []
})
export class FacturaClienteComponent implements OnInit {

  date: Date;
  proyecto: String;
  horas: Number;
  horasExtra: Number;
  observaciones: String;

  cliente: Cliente = new Cliente('');
  usuario: Usuario;

  facturaciones: RegistroFacturacion[];



  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private clienteService: ClienteService) { 

    this.usuario = this.usuarioService.usuario;
    this.facturaciones = this.usuario.facturacion;

    activatedRoute.params.subscribe(params => {
      let id = params['id'];

      if (id !== 'nuevo'){
        this.getCliente(id);
      }
    });
  }

  ngOnInit() {
  }

  getCliente ( id: string ){
    this.clienteService.getCliente(id)
      .subscribe((cliente:any) => this.cliente = cliente.cliente
      );
  }

  addRegistro( f: NgForm){

    console.log(f.value.date);
    console.log(f.value.proyecto);
    console.log(f.value.horas);
    console.log(f.value.horasExtra);
    console.log(f.value.observaciones);

    const registro = new RegistroFacturacion(f.value.date,f.value.horas,this.cliente,f.value.horasExtra,0,0,f.value.observaciones);
    console.log(registro);
    this.usuario.facturacion.push(registro);
    this.usuarioService.actualizarUsuario(this.usuario).subscribe();
 
  }

}
