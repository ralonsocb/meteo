import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { RegHorarioComponent } from './reg-horario/reg-horario.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FacturaClienteComponent } from './facturacion/factura-cliente.component';




const pagesRoutes: Routes = [
   
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' }},
            {path: 'registro-horario', component: RegHorarioComponent, data: { titulo: 'Registro horario'}},
            {path: 'facturacion', component: FacturacionComponent, data: { titulo: 'Horas Facturables'}},
            {path: 'facturacion/:id', component: FacturaClienteComponent, data: { titulo: 'Horas Facturables'}},

            //Mantenimientos
            {path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil del usuario'}},
            {path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios'}, canActivate: [AdminGuard]},

            
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
