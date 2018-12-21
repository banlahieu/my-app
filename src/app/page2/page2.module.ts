import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2ListComponent } from './page2-list/page2-list.component';

@NgModule({
  declarations: [Page2ListComponent],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
