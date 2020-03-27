import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  public getUsers(): Observable<User[]> {
    return this.getAllUsersCollection()
      .snapshotChanges()
      .pipe(
        map(item => {
          const users: User[] = [];
          item.map(element => {
            const data = element.payload.doc.data() as User;
            users.push(data as User);
          });
          return users;
        })
      );
  }

  private getAllUsersCollection() {
    return this.firestore.collection<User>('users');
  }

}
