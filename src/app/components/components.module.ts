import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent
  ]
})
export class ComponentsModule { }
