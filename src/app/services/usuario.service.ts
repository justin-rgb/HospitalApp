import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

// import { environment } from '../../environments/environment';


import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Usuario } from '../models/usuario';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interface';


// const base_url = environment.base_url;
const base_url = 'http://localhost:3000/api';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: Usuario = new Usuario('', '');

  constructor( private http: HttpClient,
                private router: Router,
                private ngZone: NgZone ) {

    // this.googleInit();
  }


  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.usuario.uid || '';
  }

  get headers(){
    return {

      headers: {
        'x-token': this.token
      }

    }
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

    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        const { email, google, nombre, role, img, uid } = resp.usuario;

        this.usuario = new Usuario( nombre, email, '', img, google, role, uid )

        localStorage.setItem('token', resp.token );
        return true;
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

  actualizarPerfil( data: { email:string, nombre: string, role: string} ){

    data = {
      ...data,
      role: this.usuario.role!
    }

    return this.http.put(`${ base_url }/usuarios/${ this.uid }`, data, {
      headers: {
        'x-token': this.token
      }
    })

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


  cargarUsuarios( desde: number = 0){

    const url = `${base_url}/usuarios?desde=${desde}`

    return this.http.get<CargarUsuario>( url, this.headers )
                .pipe(
                  map( resp =>  {
                    const usuarios = resp.usuarios.map( user =>
                      new Usuario( user.nombre, user.email, '', user.img, user.google, user.role, user.uid ) )

                      return {
                        total: resp.total,
                        usuarios
                      }
                  })

                )
  }

  eliminarUsuario( usuario: Usuario ) {

    // /usuarios/5eff3c5054f5efec174e9c84
    const url = `${ base_url }/usuarios/${ usuario.uid }`;
    return this.http.delete( url, this.headers );
  }

  guardarUsuario( usuario: Usuario ) {

    return this.http.put(`${ base_url }/usuarios/${ usuario.uid }`, usuario, this.headers );

  }

}
