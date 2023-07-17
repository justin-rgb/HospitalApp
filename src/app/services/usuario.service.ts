import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

// import { environment } from '../../environments/environment';


import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';


// const base_url = environment.base_url;
const base_url = 'http://localhost:3000/api';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor( private http: HttpClient,
                private router: Router,
                private ngZone: NgZone ) {

    // this.googleInit();
  }


  // googleInit() {

  //   return new Promise<void>( resolve => {
  //     gapi.load('auth2', () => {
  //       this.auth2 = gapi.auth2.init({
  //         // TODO: AGREGAR CLIENT ID
  //         client_id: '815744758629-pm9g9ee5lk6ff2jv1bke17rbleul3hht.apps.googleusercontent.com',
  //         // cookiepolicy: 'single_host_origin',
  //       })
  //       resolve()
  //     });
  //   })

  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

    // this.auth2.signOut().then(() => {

    //   this.ngZone.run(() => {
    //   })
    // });

  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  }


  crearUsuario( formData: RegisterForm ) {

    return this.http.post(`${ base_url }/usuarios`, formData )
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token )
                })
              )

  }

  login( formData: LoginForm ) {

    return this.http.post(`${ base_url }/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                );

  }

  // loginGoogle( token: string ) {

  //   return this.http.post(`${ base_url }/login/google`, { token } )
  //               .pipe(
  //                 tap( (resp: any) => {
  //                   localStorage.setItem('token', resp.token )
  //                 })
  //               );

  // }



}
