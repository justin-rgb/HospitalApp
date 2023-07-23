import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


interface MenuInterface {

}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor( private route: Router ){}


  public menu: any = []

  cargarMenu(){
    this.menu = JSON.parse(localStorage.getItem('menu')!) || [];

    if(this.menu.length === 0 ){
      this.route.navigateByUrl('/login')
      return
    }

  }



  // menu: any[] = [
  //   {
  //     titulo: 'Dashboard',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Main', url: '/' },
  //       // { titulo: 'ProgressBar', url: 'progress' },
  //       // { titulo: 'Gráficas', url: 'grafica1' },
  //       // { titulo: 'Promesas', url: 'promesas' },
  //       // { titulo: 'Rxjs', url: 'rxjs' },
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: 'usuarios' },
  //       { titulo: 'Hospitales', url: 'hospitales' },
  //       { titulo: 'Médicos', url: 'medicos' },
  //     ]
  //   },
  // ];

}
