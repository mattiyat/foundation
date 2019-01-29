import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';


const config = {
apiKey: "AIzaSyC799djMSvgpD6qD1hXuHnjxnq0ajm6ows",
authDomain: "wirelessbread-test.firebaseapp.com",
databaseURL: "https://wirelessbread-test.firebaseio.com",
projectId: "wirelessbread-test",
storageBucket: "wirelessbread-test.appspot.com",
messagingSenderId: "156878096990"};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
