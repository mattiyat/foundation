import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Item } from "../../shared/item/item.model";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  items: AngularFirestoreCollection<Item[]> = null;
  item: AngularFirestoreDocument<Item> = null;
  slideDecks: AngularFirestoreCollection = null;
  userId: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  public getItemsCollection(): AngularFirestoreCollection<Item[]> {
    if (!this.userId) {
      return;
    }
    this.db
      .collection(`items`)
      .valueChanges()
      .subscribe(val => console.log); //
    return this.items;
  }

  public getItemDocument(): AngularFirestoreDocument<Item> {
    if (!this.userId) {
      return;
    }
    this.item = this.db.doc<Item>(``);
    return this.item;
  }

  createItem(item: Item[]) {
    this.items.add(item);
  }
}
