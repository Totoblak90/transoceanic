import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { UiModule } from '../../ui/ui.module';
import { DirectivesModule } from '../../directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    UiModule,
    DirectivesModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
