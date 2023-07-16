import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor(){
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  retornaIntervalo(): Observable<number> {
    // El interval es la frecuencia del tiempo en el que se ejecuta la peticion
    return interval(100)
            .pipe(
              take(100),
              map( valor => valor + 1), // 0 => 1
              filter( valor => ( valor % 2 === 0 ) ? true : false ),
            )
            ;
  }


  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error('i llego al valor de 2');
        }

      }, 1000 )

    });

  }


}
