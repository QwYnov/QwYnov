import { Question } from './../model/question.model';
import { QuizapiService } from './../services/quizapi.service';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userEmail: string;
  question: Question;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private quizapi: QuizapiService
  ) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      if(res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateForward('/login');
      }
    }, err => {
      console.log('err', err);
    })
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  show() {
    this.authService.userDetails().subscribe(res => {
      if (res !== null) {
        console.log(res)
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })
  }

  findQuestion() {
    this.quizapi.findQuestion().subscribe(x => this.question = x);
  }

}
