import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizInternautePageRoutingModule } from './quiz-internaute-routing.module';

import { QuizInternautePage } from './quiz-internaute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInternautePageRoutingModule
  ],
  declarations: [QuizInternautePage]
})
export class QuizInternautePageModule {}
