import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizapiService } from './../services/quizapi.service';
import { Question } from './../model/question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizapi',
  templateUrl: './quizapi.page.html',
  styleUrls: ['./quizapi.page.scss'],
})
export class QuizapiPage implements OnInit {
  private quizForm: FormGroup;

  constructor(
    private quizapi: QuizapiService,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {
    this.quizForm = this.formBuilder.group({
      question: ['10', Validators.required],
      timer: ['60'],
      difficulty: [''],
      theme: [''],
    });
  }

  ngOnInit() {}

  quizForms() {
    this.quizapi.findQuestion(this.quizForm.value).subscribe((questions) => {
      this.firestore
        .collection('roomQuiz')
        .add({ questions, timer: this.quizForm.value.timer})
        .then((doc) => {
          this.navCtrl.navigateForward(`quiz/?id=${doc.id}`);
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    });
  }
}
