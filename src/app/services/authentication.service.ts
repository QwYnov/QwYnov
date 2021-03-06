import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(
            this.firestore.collection('users').doc(res.user.uid).set({
              id: res.user.uid,
              email: value.email,
              pseudo: value.pseudo,
              administrator: false,
            })),
          err => reject(err))
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            resolve(
              console.log("LOG Out")
              );
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }
}
