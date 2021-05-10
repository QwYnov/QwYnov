import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizapiPage } from './quizapi.page';

const routes: Routes = [
  {
    path: '',
    component: QuizapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizapiPageRoutingModule {}
