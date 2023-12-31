import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor( private usuarioService: UsuarioService,
               private router: Router ){

    this.usuario = usuarioService.usuario;

  }

  logout(){
    this.usuarioService.logout()
  }

  buscar( termino: HTMLInputElement ){
    if ( termino.value.length === 0  ) {
      return;
    }

    this.router.navigateByUrl(`/dashboard/buscar/${ termino.value }`);
  }
  // CAMBIAR EL TEMA DE LA PAGINA
  // TODO: CAMBIAR TEMA DESDE EL HEADER
  // changeTheme( theme: string ){

  //   const linkTheme = document.querySelector('#theme')
  //   const url = `./assets/css/colors/${theme}.css`

  //   linkTheme?.setAttribute('href', url)

  // }

}
