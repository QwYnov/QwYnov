import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionUserPage } from './question-user.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionUserPageRoutingModule {}
