import { Injectable } from '@angular/core';

const base_url = 'http://localhost:3000/api';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService{

  constructor() { }

  async actualizarFoto(
    archivo: File,
    tipo: 'usuarios'|'medicos'|'hospitales',
    id: string
  ){

    try {

      const url = `${base_url}/upload/${tipo}/${id}`
      const formData = new FormData();
      formData.append('imagen', archivo)

      const resp = await fetch( url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      })

      const data = await resp.json();
      if (data.ok) {
        return data.nombreArchivo
      }else{
        return false;
      }

    } catch (error) {
      console.log(error);
      return false;
    }

  }
}
