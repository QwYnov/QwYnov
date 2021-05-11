import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-res-quiz',
  templateUrl: './res-quiz.page.html',
  styleUrls: ['./res-quiz.page.scss'],
})
export class ResQuizPage implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  quiz = {};
  isFinish = 0;
  players = 0;
  res = [];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.firestore
        .collection('quizResponse')
        .doc(params['id'])
        .get()
        .subscribe((doc) => {
          if (doc.exists) {
            this.quiz = doc.data();
            this.quiz['player'].forEach((element) => {
              if (element.res) {
                this.isFinish++;
              }
              this.players++;
            });
            if (this.isFinish == this.players) {
              this.res = this.quiz['player'].sort((a, b) => b.res - a.res);
            }
          } else {
            console.log('No such document!');
          }
        });
    });
  }

  goToHome() {
    this.navCtrl.navigateForward(`home`);
  }
}
 