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


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    Grafica1Component,
    ProgressComponent,
    AccountSettingsComponent,
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
