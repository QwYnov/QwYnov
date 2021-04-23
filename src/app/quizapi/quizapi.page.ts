import { QuizapiService } from './../services/quizapi.service';
import { Question } from './../model/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizapi',
  templateUrl: './quizapi.page.html',
  styleUrls: ['./quizapi.page.scss'],
})
export class QuizapiPage implements OnInit {

  constructor(private quizapi: QuizapiService) { }

  question: Question;

  ngOnInit() {
  }

  findQuestion() {
    this.quizapi.findQuestion().subscribe(x => this.question = x);
  }

}
