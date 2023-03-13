import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('homePage') homePage: ElementRef<HTMLDivElement> | undefined;

  constructor(private utilitiesService: UtilitiesService) {}

  ngAfterViewInit(): void {
    this.adjustSize()
  }

  @HostListener('window:resize')
  onRezise() {
    this.adjustSize()
  }


  adjustSize() {
    if (this.homePage) {
      if (window.innerWidth <= 338) {
        this.homePage.nativeElement.style.height = (window.innerHeight - this.utilitiesService.headerHeightMini - this.utilitiesService.footerHeightMobile) / 10 + 'rem';
      }

      else if (window.innerWidth < 960 && window.innerWidth > 338) {
        this.homePage.nativeElement.style.height = (window.innerHeight - this.utilitiesService.headerHeightMobile - this.utilitiesService.footerHeightMobile) / 10 + 'rem';
      }

      else {
          this.homePage.nativeElement.style.height = (window.innerHeight - this.utilitiesService.headerHeightDesktop - this.utilitiesService.footerHeightDesktop) / 10 + 'rem';
      }
    }
  }

}
