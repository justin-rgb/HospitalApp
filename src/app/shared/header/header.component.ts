import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {



  // CAMBIAR EL TEMA DE LA PAGINA
  changeTheme( theme: string ){

    const linkTheme = document.querySelector('#theme')
    const url = `./assets/css/colors/${theme}.css`

    linkTheme?.setAttribute('href', url)

  }

}
