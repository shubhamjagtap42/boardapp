import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:'home'},
          {label: 'My Cases', icon: 'pi pi-fw pi-file',routerLink:'mycases'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar',routerLink:'calender'},
      
          {label: 'Notification', icon: 'pi pi-fw pi-bell',routerLink:'notification'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];
  }
}
