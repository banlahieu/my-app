import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1ListComponent } from './page1-list/page1-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Page1ListComponent],
  imports: [
    CommonModule,
    Page1RoutingModule,
    FormsModule
  ]
})
export class Page1Module { }
