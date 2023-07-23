import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
  { path: 'grafica1', component: Grafica1Component , data: { titulo: 'Grafica #1' }},
  { path: 'account-settings', component: AccountSettingsComponent ,data: { titulo: 'Ajustes de cuenta' }},
  { path: 'buscar/:termino', component: BusquedaComponent ,data: { titulo: 'Resultados de busqueda' }},
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJS' } },
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' } },

  // Mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Médico' } },

  // Rutas Admin
  { path: 'usuarios', canActivate: [ AdminGuard ] ,  component: UsuariosComponent, data: { titulo: 'Usuarios de la aplicación' } },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( childRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class ChildRoutesModule { }
