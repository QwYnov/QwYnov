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

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService
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

  toCreationQuestion() {
    this.navCtrl.navigateBack('/question-user');
  }

}
