import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public firestore: AngularFirestore) {}

  add() {
    console.log("ererz")
    this.firestore.collection('User').add({
    	text: "yo"
    });
  }
}
