import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatWeDoRoutingModule } from './what-we-do-routing.module';
import { WhatWeDoComponent } from './what-we-do.component';
import { UiModule } from '../../ui/ui.module';


@NgModule({
  declarations: [
    WhatWeDoComponent
  ],
  imports: [
    CommonModule,
    WhatWeDoRoutingModule,
    UiModule
  ]
})
export class WhatWeDoModule { }
