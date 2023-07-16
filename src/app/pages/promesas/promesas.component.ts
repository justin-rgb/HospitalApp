import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {

    // CON LAS PROMESAS PODEMOS MANIPULAR CUANDO IMPRIMIRLO
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })

    // const promesa = new Promise( ( resolve ) => {
    //   resolve('Hola mundo')
    // })
    // promesa.then( () => console.log('Termine') )
    // console.log('Fin del init');
  }


  getUsuarios() {

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );

    });

  }


}
