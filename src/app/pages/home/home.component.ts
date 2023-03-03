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
      if (window.innerWidth < 768) {
        this.homePage.nativeElement.style.height = window.outerHeight - this.utilitiesService.headerHeightMobile - this.utilitiesService.footerHeightMobile + 'px';
        this.homePage.nativeElement.style.display = 'flex';
      } else {
          this.homePage.nativeElement.style.height = window.outerHeight - this.utilitiesService.headerHeightDesktop - this.utilitiesService.footerHeightDesktop + 'px';
          this.homePage.nativeElement.style.display = 'flex';
      }
    }
  }

}
