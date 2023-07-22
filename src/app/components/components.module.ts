import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    ModalImagenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementadorComponent,
    ModalImagenComponent
  ]
})
export class ComponentsModule { }
