import { AuthenticationService } from './../services/authentication.service';
import { InviteFriendsPage } from './../invite-friends/invite-friends.page';
import { NavController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-internaute',
  templateUrl: './quiz-internaute.page.html',
  styleUrls: ['./quiz-internaute.page.scss'],
})
export class QuizInternautePage implements OnInit {
  quizForm: FormGroup;
  invitedFriends = [];

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    public modalController: ModalController,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      question: ['10', Validators.required],
      timer: ['60'],
      difficulty: [''],
      theme: [''],
    });
  }

  quizForms() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: InviteFriendsPage,
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
