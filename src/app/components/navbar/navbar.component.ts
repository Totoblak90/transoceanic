import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuItem } from '../../interfaces/navbar.interface';
import { UtilitiesService } from '../../services/utilities.service';

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
      text: 'Quiénes somos',
      to: 'about-us'
    },
    {
      text: 'Qué hacemos',
      to: 'what-we-do'
    },
    {
      text: 'Contáctenos',
      to: 'contact-us'
    },
  ]

  toggleMenu = false;

  constructor(private utilitiesService: UtilitiesService) {}

  openMenu() {
    this.toggleMenu = !this.toggleMenu;
    this.utilitiesService.isMobileExpandedMenuOpen.next(this.toggleMenu);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }
}
