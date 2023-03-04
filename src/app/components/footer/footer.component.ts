import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/navbar.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

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



}
