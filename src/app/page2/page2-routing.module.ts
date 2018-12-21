import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2ListComponent } from './page2-list/page2-list.component';

const routes: Routes = [
  {
    path: '',
    component: Page2ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
