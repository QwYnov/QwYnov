import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResQuizPageRoutingModule } from './res-quiz-routing.module';

import { ResQuizPage } from './res-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResQuizPageRoutingModule
  ],
  declarations: [ResQuizPage]
})
export class ResQuizPageModule {}
