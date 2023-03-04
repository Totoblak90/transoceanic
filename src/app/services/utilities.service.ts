import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public headerHeightDesktop = 110;
  public headerHeightMobile = 80;
  public footerHeightDesktop = 85;
  public footerHeightMobile = 91;


  constructor() { }
}
