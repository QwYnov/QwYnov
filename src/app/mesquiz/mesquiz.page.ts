import { NavController } from '@ionic/angular';
import { AuthenticationService } from './../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesquiz',
  templateUrl: './mesquiz.page.html',
  styleUrls: ['./mesquiz.page.scss'],
})
export class MesquizPage implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {}

  myQuiz = [];

  ngOnInit() {
    this.authService.userDetails().subscribe((user) => {
      this.firestore
        .collection('quizResponse')
        .valueChanges()
        .subscribe((res) => {
          this.myQuiz = [];
          res.forEach((quiz) => {
            quiz['player'].forEach((element) => {
              if (element.id == user.uid) {
                if (element.res) {
                  this.myQuiz.push({ quiz, isRep: true });
                } else {
                  this.myQuiz.push({ quiz, isRep: false });
                }
              }
            });
          });
        });
    });
  }

  goToQuiz(id) {
    this.navCtrl.navigateForward(`quiz/?id=${id}`);
  }

  goToRes(id) {
    this.navCtrl.navigateForward(`res-quiz/?id=${id}`);
  }

  goToHome() {
    this.navCtrl.navigateForward(`home`);
  }
}
