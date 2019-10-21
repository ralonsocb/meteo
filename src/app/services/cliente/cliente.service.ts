import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

import swal from 'sweetalert';
import { UsuarioService } from '../usuario/usuario.service';
import { Cliente } from 'src/app/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  [x: string]: any;

  totalClientes: number = 0;


  constructor( public http: HttpClient, public _usuarioService: UsuarioService) { }


getClientes (){

  let url = URL_SERVICIOS + '/cliente';

  return this.http.get( url)
        .pipe(map((resp:any) => {
          this.totalClientes = resp.total;
          return resp.clientes;
        }));
}

getCliente ( id: string){

  let url = URL_SERVICIOS+'/cliente/'+id;

  return this.http.get(url);
    
}

crearCliente(cliente:Cliente) {

  let url = URL_SERVICIOS+'/cliente';

  if ( cliente._id){
    url += '/'+cliente._id;
    url += '?token='+ this._usuarioService.token;

    return this.http.put(url, cliente)
      .pipe(map( (resp:any) =>{
        swal('Cliente actualizado',cliente.nombre, 'success');
        return resp.cliente;
      }));
  }else{
    url += '?token='+ this._usuarioService.token;
    return this.http.post(url, cliente)
      .pipe(map( (resp:any) => {
        swal('Cliente registrado',cliente.nombre, 'success');
        return resp.cliente;
      }));
  }
  
}


eliminarCliente ( id: string) {

  let url = URL_SERVICIOS + '/cliente/' +id;
  url += '?token='+ this._usuarioService.token;

  return this.http.delete(url)
              .pipe(map( resp => {
                swal('Cliente eliminado', ' El cliente ha sido eliminado correctamente', 'success');
                return true;
              }));
}


}