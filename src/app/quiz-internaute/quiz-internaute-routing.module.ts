import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizInternautePage } from './quiz-internaute.page';

const routes: Routes = [
  {
    path: '',
    component: QuizInternautePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizInternautePageRoutingModule {}
