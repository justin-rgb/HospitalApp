import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor( private usuarioService: UsuarioService ){}

  logout(){
    this.usuarioService.logout()
  }


  // CAMBIAR EL TEMA DE LA PAGINA
  // TODO: CAMBIAR TEMA DESDE EL HEADER
  // changeTheme( theme: string ){

  //   const linkTheme = document.querySelector('#theme')
  //   const url = `./assets/css/colors/${theme}.css`

  //   linkTheme?.setAttribute('href', url)

  // }

}
