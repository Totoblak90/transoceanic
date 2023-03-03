import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { LogoComponent } from './logo/logo.component';
import { ImageBadgeComponent } from './image-badge/image-badge.component';



@NgModule({
  declarations: [
    FaIconComponent,
    LogoComponent,
    ImageBadgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FaIconComponent,
    LogoComponent,
    ImageBadgeComponent
  ]
})
export class UiModule { }
