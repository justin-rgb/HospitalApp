import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Injectable({
  providedIn: 'root',
})
export class AdminGuard {

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.usuarioService.role === 'ADMIN_ROLE') {
      return true;
    } else {
      this.router.navigateByUrl('/dashboard');
      return false;
    }

    // return (this.usuarioService.role === 'ADMIN_ROLE') ? true : false;
  }


}
