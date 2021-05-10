import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionUserPageRoutingModule } from './question-user-routing.module';

import { QuestionUserPage } from './question-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuestionUserPage]
})
export class QuestionUserPageModule {}
