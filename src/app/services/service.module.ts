import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService } from './settings/settings.service';
import { SidebarService } from './shared/sidebar.service';
import { SharedService } from './shared/shared.service';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';

import { LoginGuardGuard } from './guards/login-guard.guard';
import { AdminGuard } from './guards/admin.guard';
import { ClienteService } from './cliente/cliente.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    ClienteService,
    LoginGuardGuard,
    AdminGuard
 
  ]
})
export class ServiceModule { }
