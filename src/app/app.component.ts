import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @HostListener('window:resize')
  onRezise() {
    this.adjustTopMargin()
  }

  ngAfterViewInit(): void {
    this.adjustTopMargin()
  }

  adjustTopMargin() {
    const router_outlet_container = document.getElementById('router-outlet-container')

    if (router_outlet_container) {
      if (window.innerWidth <= 768) {
        router_outlet_container.style.marginTop = '170px'
      } else {
        router_outlet_container.style.marginTop = '320px'
      }
    }
  }

}
