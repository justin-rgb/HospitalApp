import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Usuario } from 'src/app/models/usuario';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit{

  public perfilForm: FormGroup = new FormGroup('');
  public usuario: Usuario;
  public imagenSubir: File = new File([], '');
  public imgTemp: any = ''

  constructor( private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private fileUploadService: FileUploadService ){

    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {

    this.perfilForm = this.fb.group({
      nombre: [ this.usuario.nombre , Validators.required ],
      email: [ this.usuario.email , [ Validators.required, Validators.email ] ]
    })

  }

  actualizarPerfil(){
    console.log(this.perfilForm.value);

    this.usuarioService.actualizarPerfil( this.perfilForm.value )
    .subscribe( resp => {
      const { nombre, email } = this.perfilForm.value
      this.usuario.nombre = nombre;
      this.usuario.email = email;

      Swal.fire({
        icon: 'success',
        title: 'Se han guardado los cambios correctamente'
      })
    }, (err) => {
      Swal.fire(err.error.msg,'','error')
    })

  }

  cambiarImagen( event: any ){
    var file: File;
    file = event.target.files[0]
    this.imagenSubir = file;

    if( !file ) {
      return this.imgTemp = null
    }

    const reader = new FileReader()
    reader.readAsDataURL( file )

    reader.onloadend = () => {
      this.imgTemp = reader.result
    }
    return false;

  }

  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid! )
    .then( img => {
      this.usuario.img = img
      Swal.fire('Se ha guardado la imagen correctamente','','success')
    })
    .catch( err => {
      Swal.fire('No se logro subir la imagen','','error')
    })
  }


}
