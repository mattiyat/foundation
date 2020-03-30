import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { config } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './core/login/login.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';

import { ItemCardComponent } from './item/item-card/item-card.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './core/nav/nav.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeroComponent } from './hero/hero.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    ItemCardComponent,
    ItemListComponent,
    ItemDetailsComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    NavComponent,
    CardComponent,
    CardListComponent,
    HeroComponent,
    HomepageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
