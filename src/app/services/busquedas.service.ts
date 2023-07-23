import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map } from 'rxjs';
import { Hospital } from '../models/hospital';
import { Medico } from '../models/medico';


const base_url = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  private transformarUsuarios( resultados: any[] ): Usuario[] {

    return resultados.map(
      user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid )
    );
  }

  private transformarHospitales( resultados: any[] ): Hospital[] {

    return resultados;

  }

  private transformarMedicos( resultados: any[] ): Medico[] {
    return resultados;
  }


  busquedaGlobal( termino: string ){

    const url = `${ base_url }/todo/${ termino }`;
    return this.http.get<any[]>( url, this.headers )

  }


  buscar(
      tipo: 'usuarios'|'medicos'|'hospitales',
      termino: string
    ) {

    const url = `${ base_url }/todo/coleccion/${ tipo }/${ termino }`;
    return this.http.get<any[]>( url, this.headers )
            .pipe(
              map( (resp: any ) => {

                switch ( tipo ) {
                  case 'usuarios':
                    return this.transformarUsuarios( resp.resultados )

                  case 'hospitales':
                    return this.transformarHospitales( resp.resultados )

                  case 'medicos':
                    return this.transformarMedicos( resp.resultados )
                    // return this.transformarUsuarios( resp.resultados )

                  default:
                    return [];
                }

              })
            );

  }


}
