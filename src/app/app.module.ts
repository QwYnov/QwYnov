import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/';
import { firebaseConfig } from '../config/firebase.js';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDkRNLFIOLprZJmTXCeQGbDXKd9mvWPZyw",
//   authDomain: "qwynov.firebaseapp.com",
//   projectId: "qwynov",
//   storageBucket: "qwynov.appspot.com",
//   messagingSenderId: "250036152599",
//   appId: "1:250036152599:web:df635b83aadadfac7def52",
//   measurementId: "G-1H6FPVSWLG"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
