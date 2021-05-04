import { AuthenticationService } from './../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-question-by-id',
  templateUrl: './question-by-id.component.html',
  styleUrls: ['./question-by-id.component.scss'],
})
export class QuestionByIdComponent implements OnInit {
  @Input() allQuestion: any;
  nbrQuestion: number = 0;
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  resultat: number = 0;
  quizId;
  timer: number;
  players;
  intervale;

  constructor(
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  startTimer(duration: number) {
    clearInterval(this.intervale);
    this.timer = duration * 60;
    this.intervale = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < 0) {
      this.nextQuestion();
      this.submit('');
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.quizId = params['id'];
    });
  }

  ngOnChanges() {
    this.startTimer(Number(this.allQuestion?.timer) / 60);
  }

  nextQuestion() {
    this.nbrQuestion++;
    this.startTimer(Number(this.allQuestion?.timer) / 60);
  }

  submit(response) {
    if (response == 'true') {
      this.resultat++;
    }

    this.nextQuestion();

    if (this.nbrQuestion == this.allQuestion.questions.length) {
      this.authService.userDetails().subscribe((res) => {
        this.firestore
          .collection('quizResponse')
          .doc(this.quizId)
          .valueChanges()
          .subscribe((doc) => {
            this.players = doc['player'];
            this.players.forEach((element) => {
              if (element.id == res.uid) {
                Object.assign({}, element);
                element.res = this.resultat;
              }
            });

            this.firestore
              .collection('quizResponse')
              .doc(this.quizId)
              .update({
                player: this.players
              })
              .then()
              .catch((error) => {
                console.error('Error writing document: ', error);
              });
          });
      });
      this.navCtrl.navigateForward('/home');
    }
  }
}
