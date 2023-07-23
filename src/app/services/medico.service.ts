import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../models/medico';
import { map } from 'rxjs';


const base_url = 'http://localhost:3000/api';

interface MedicoResponse {
  ok: boolean;
  medico: Medico[]
  medicos?: Medico
}


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

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

  cantMedicosNombre(){
    const url = `${base_url}/medicos/medicosN`
    return this.http.get( url )
  }


  cargarMedicos() {

    const url = `${ base_url }/medicos`;
    return this.http.get<MedicoResponse>( url, this.headers )
              .pipe(
                map( (resp: MedicoResponse) => resp.medicos )
              );
  }

  obtenerMedicoPorId( id: string ) {

    const url = `${ base_url }/medicos/${ id }`;
    return this.http.get<MedicoResponse>( url, this.headers )
              .pipe(
                map( (resp: MedicoResponse ) => resp.medico )
              );
  }

  crearMedico( medico: { nombre: string, hospital: string } ) {

    const url = `${ base_url }/medicos`;
    return this.http.post( url, medico, this.headers );
  }

  actualizarMedico( medico: Medico  ) {

    const url = `${ base_url }/medicos/${ medico._id }`;
    return this.http.put( url, medico, this.headers );
  }

  borrarMedico( _id: string ) {

    const url = `${ base_url }/medicos/${ _id }`;
    return this.http.delete( url, this.headers );
  }



}
