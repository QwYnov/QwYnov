import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPageRoutingModule } from './quiz-routing.module';

import { QuizPage } from './quiz.page';
import { QuestionByIdComponent } from '../question-by-id/question-by-id.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
  ],
  entryComponents: [QuestionByIdComponent],
  declarations: [QuizPage, QuestionByIdComponent]
})
export class QuizPageModule {}
