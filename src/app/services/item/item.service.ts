import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Item } from "./item.model";

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

  getSlideDecks() {
    this.slideDecks = this.db.collection(`slide-decks`);
    console.log(this.slideDecks);
    this.slideDecks.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data);
      });
    });
  }

  createItem(item: Item[]) {
    this.items.add(item);
  }
}
