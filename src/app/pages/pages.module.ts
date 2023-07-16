import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    Grafica1Component,
    ProgressComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    Grafica1Component,
    ProgressComponent,
    AccountSettingsComponent,
  ]
})
export class PagesModule { }
