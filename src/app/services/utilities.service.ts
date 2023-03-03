import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public headerHeightDesktop = 140;
  public headerHeightMobile = 95;
  public footerHeightDesktop = 85;
  public footerHeightMobile = 91;


  constructor() { }
}
