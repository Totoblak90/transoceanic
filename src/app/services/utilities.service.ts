import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public headerHeightDesktop = 320;
  public headerHeightMobile = 170;
  public footerHeightDesktop = 85;
  public footerHeightMobile = 91;


  constructor() { }
}
