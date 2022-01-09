import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import firebase from 'firebase/compat/app';
import { FormsModule } from '@angular/forms'; 
import { MaterialExampleModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// const config = {
//   apiKey: "AIzaSyDOrbxielYg3v7aLmElbTHhsBChaFLOimg",
//   authDomain: "stockforparties.firebaseapp.com",
//   projectId: "stockforparties",
//   storageBucket: "stockforparties.appspot.com",
//   messagingSenderId: "286868849748",
//   appId: "1:286868849748:web:6fd3186d8bc38e2d3a59c1",
//   measurementId: "G-XGG875NCPM"
// };

const config = {
  apiKey: "AIzaSyA3S3hYNmn6chilFIKBc_V4BV_pvE4dC6s",
  authDomain: "stockparties.firebaseapp.com",
  projectId: "stockparties",
  storageBucket: "stockparties.appspot.com",
  messagingSenderId: "856076430916",
  databaseURL: 'https://stockparties-default-rtdb.firebaseio.com/',
  appId: "1:856076430916:web:3b0a9742ea178d1d4f1611"
};

// const config = {
//   apiKey: 'AIzaSyAPgpndhr5kekWhrIIsKH3L7RqA9fdXUtg',
//   authDomain: 'scribe-bda5c.firebaseapp.com',
//   databaseURL: 'https://scribe-bda5c.firebaseio.com',
//   projectId: 'scribe-bda5c',
//   storageBucket: 'scribe-bda5c.appspot.com',
//   messagingSenderId: '229718982894'
// };

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

