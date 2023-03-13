import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public headerHeightDesktop = 110;
  public headerHeightMobile = 80;
  public footerHeightDesktop = 85;
  public footerHeightMobile = 91;
  public headerHeightMini = 66;

  public isMobileExpandedMenuOpen = new BehaviorSubject<boolean>(false)

  constructor() { }
}
