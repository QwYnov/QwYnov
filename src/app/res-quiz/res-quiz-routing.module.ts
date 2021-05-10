import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResQuizPage } from './res-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: ResQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResQuizPageRoutingModule {}
