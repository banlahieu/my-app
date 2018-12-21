import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1ListComponent } from './page1-list/page1-list.component';

const routes: Routes = [
  {
    path: '',
    component: Page1ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule { }
