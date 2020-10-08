import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreadPage } from './thread.page';

const routes: Routes = [
  {
    path: '',
    component: ThreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreadPageRoutingModule {}
