import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private utilitiesService: UtilitiesService) {}

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
      if (window.innerWidth <= 960) {
        router_outlet_container.style.marginTop = this.utilitiesService.headerHeightMobile / 10 + 'rem'
      } else {
        router_outlet_container.style.marginTop = this.utilitiesService.headerHeightDesktop / 10 + 'rem'
      }
    }
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
