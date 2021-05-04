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
    private authService: AuthenticationService
  ) {}

  myQuiz;

  ngOnInit() {
    this.authService.userDetails().subscribe((user) => {
      this.firestore
        .collection('quizResponse', (ref) =>
          ref.where('player.id', '==', user.uid)
        )
        .valueChanges()
        .subscribe((res) => {
          this.myQuiz = res
        });
    });
  }
}
