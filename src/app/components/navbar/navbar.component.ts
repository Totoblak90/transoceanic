import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/navbar.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuItems: MenuItem[] = [
    {
      text: 'Inicio',
      to: '/'
    },
    {
      text: 'Quienes somos',
      to: 'about-us'
    },
    {
      text: 'Ubicaciones',
      to: 'location'
    },
    {
      text: 'Contactenos',
      to: 'contact-us'
    },
  ]

  toggleMenu = false;

  openMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
