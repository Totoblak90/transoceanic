import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { LogoComponent } from './logo/logo.component';
import { ImageBadgeComponent } from './image-badge/image-badge.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    FaIconComponent,
    LogoComponent,
    ImageBadgeComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FaIconComponent,
    LogoComponent,
    ImageBadgeComponent,
    InputComponent,
    ButtonComponent
  ]
})
export class UiModule { }
