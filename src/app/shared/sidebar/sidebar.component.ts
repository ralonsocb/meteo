import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  constructor( public _sidebar: SidebarService,
               public _usuarioService: UsuarioService) {

                this.usuario = this._usuarioService.usuario;
                console.log(this.usuario);
                }

  ngOnInit() {

  }

}
