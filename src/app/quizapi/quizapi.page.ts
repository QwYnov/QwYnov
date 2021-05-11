import { AuthenticationService } from './../services/authentication.service';
import { InviteFriendsPage } from './../invite-friends/invite-friends.page';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizapiService } from './../services/quizapi.service';
import { Question } from './../model/question.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quizapi',
  templateUrl: './quizapi.page.html',
  styleUrls: ['./quizapi.page.scss'],
})
export class QuizapiPage implements OnInit {
  quizForm: FormGroup;
  invitedFriends = [];

  constructor(
    private quizapi: QuizapiService,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    public modalController: ModalController
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
    this.quizapi.findQuestion(this.quizForm.value).then((questionData) => {
      let questions = JSON.parse(questionData.data)
      this.firestore
        .collection('roomQuiz')
        .add({ questions, timer: this.quizForm.value.timer, date: new Date() })
        .then((doc) => {
          console.log(doc.id)
          this.firestore
            .collection('quizResponse')
            .doc(doc.id)
            .set({
              player: this.invitedFriends[0],
              quizId: doc.id,
              date: new Date(),
            });
          this.navCtrl.navigateForward(`quiz/?id=${doc.id}`);
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: InviteFriendsPage,
      componentProps: this.invitedFriends
    });

    modal.onDidDismiss().then((data) => {
      this.invitedFriends = [];
      this.invitedFriends.push(data['data']);
    });
    return await modal.present();
  }

  goToHome() {
    this.navCtrl.navigateForward(`home`);
  }
}
