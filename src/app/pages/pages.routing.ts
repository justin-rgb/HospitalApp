import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    data: { titulo: 'Dashboard' },
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./child-routes.module').then( module => module.ChildRoutesModule )
  },
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {

}
