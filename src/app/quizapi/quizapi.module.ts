import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizapiPageRoutingModule } from './quizapi-routing.module';

import { QuizapiPage } from './quizapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizapiPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [QuizapiPage],
})
export class QuizapiPageModule {}
