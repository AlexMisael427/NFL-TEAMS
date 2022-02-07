import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
})
export class TabMenuComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;
  
  constructor() { }

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/Home']},
            {label: 'List Teams', icon: 'pi pi-fw pi-list', routerLink: ['/Teams']},
            {label: 'Add Teams', icon: 'pi pi-fw pi-pencil', routerLink: ['/Add-Team']},

        ];

        this.activeItem = this.items[0];
    }

}
