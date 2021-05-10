import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-question-user',
  templateUrl: './question-user.page.html',
  styleUrls: ['./question-user.page.scss'],
})
export class QuestionUserPage implements OnInit {
  formQuestion: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public firestore: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.formQuestion = this.formBuilder.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      goodAnswer1: [false],
      answer2: ['', Validators.required],
      goodAnswer2: [false],
      answer3: ['', Validators.required],
      goodAnswer3: [false],
      answer4: ['', Validators.required],
      goodAnswer4: [false],
      difficulty: ['easy'],
      valide: false,
    });
  }

  ngOnInit() {}

  submitQuestion() {
    this.firestore
      .collection('questions')
      .add(this.formQuestion.value)
      .then((docRef) => {
        this.presentAlert();

        this.navCtrl.navigateBack('/home');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Merci d'avoir soumis votre questions",
      message: 'Un administrateur va valider votre question',
      buttons: ['OK'],
    });

    await alert.present();
  }

  goToHome() {
    this.navCtrl.navigateForward(`home`);
  }
}
