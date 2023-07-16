import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription = new Subscription();

  constructor( private router: Router ){

    this.tituloSubs$ = this.getDataRuta()
                .subscribe( ({ titulo }) => {
                  this.titulo = titulo
                  document.title = `Hospital App - ${titulo}`
                })

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }


  getDataRuta(){

    return this.router.events
    .pipe(
      filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    )


  }


}
