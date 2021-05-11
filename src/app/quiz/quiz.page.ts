import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  question

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.firestore
        .collection('roomQuiz')
        .doc(params['id'])
        .get()
        .subscribe((doc) => {
          if (doc.exists) {
            this.question = doc.data()
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        });
    });
  }
}
