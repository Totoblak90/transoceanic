import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    FaIconComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FaIconComponent,
    LogoComponent
  ]
})
export class UiModule { }
