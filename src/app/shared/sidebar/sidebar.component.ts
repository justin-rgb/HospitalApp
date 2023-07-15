import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public menuItems: any[] = [];

  constructor( private sidebarService: SidebarService ){
    this.menuItems = sidebarService.menu
  }



}
