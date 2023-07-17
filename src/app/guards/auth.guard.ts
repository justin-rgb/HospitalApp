import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

  constructor( private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){

    return this.usuarioService.validarToken()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ){
            this.router.navigateByUrl('/login')
          }
        })
      )
  }
}
