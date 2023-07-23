import { Pipe, PipeTransform } from '@angular/core';

const base_url = 'http://localhost:3000/api';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: 'usuarios'|'medicos'|'hospitales'): string{

    if (!img) {
      return `${base_url}/upload/usuarios/no-image`;
    } else if (img.includes('https')) {
      return img;
    } else if (img) {
      return `${base_url}/upload/${tipo}/${img}`;
    } else {
      return `${base_url}/upload/usuarios/no-image`;
    }

  }



}
