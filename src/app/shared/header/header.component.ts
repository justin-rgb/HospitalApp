import { Component } from '@angular/core';
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

  constructor( private usuarioService: UsuarioService ){

    this.usuario = usuarioService.usuario;

  }

  logout(){
    this.usuarioService.logout()
  }

  buscar( termino: HTMLInputElement ){
    console.log(termino.value);
  }
  // CAMBIAR EL TEMA DE LA PAGINA
  // TODO: CAMBIAR TEMA DESDE EL HEADER
  // changeTheme( theme: string ){

  //   const linkTheme = document.querySelector('#theme')
  //   const url = `./assets/css/colors/${theme}.css`

  //   linkTheme?.setAttribute('href', url)

  // }

}
