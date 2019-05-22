import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, ) { }

  public getUsers(): Observable<User[]> { 
    const userCollection = this.firestore.collection('users');
    return this.getAllUsersCollection.snapshotChanges().pipe(map)
  }

  private getAllUsersCollection() {
    return this.firestore.collection<User>('users');
  }

}
