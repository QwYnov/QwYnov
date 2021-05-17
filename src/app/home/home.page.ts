import { Question } from './../model/question.model';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { PushNotifications } = Plugins;

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
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authService.userDetails().subscribe(
      (res) => {
        if (res !== null) {
          this.userEmail = res.email;
        } else {
          this.navCtrl.navigateForward('/login');
        }
      },
      (err) => {
        console.log('err', err);
      }
    );

    console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        //alert('Push registration success, token: ' + token.value);
      },
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      //alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        //alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        //alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }

  logout() {
    this.authService
      .logoutUser()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toCreationQuestion() {
    this.navCtrl.navigateForward('/question-user');
  }

  quizApi() {
    this.navCtrl.navigateForward('/quizapi');
  }

  quizInternaute() {
    this.navCtrl.navigateForward('/quiz-internaute');
  }

  mesQuiz() {
    this.navCtrl.navigateForward('/mesquiz');
  }
}
