import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizInternautePageRoutingModule } from './quiz-internaute-routing.module';

import { QuizInternautePage } from './quiz-internaute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInternautePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuizInternautePage]
})
export class QuizInternautePageModule {}
