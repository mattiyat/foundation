import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Item } from "./item.model";
import * as rxjs from "rxjs";
import { from, Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private afDatabase: AngularFirestore) { }

  // Return entire item collection
  private getAllItemsCollection() {
    return this.afDatabase.collection<Item>('items');
  }

  // Returns observable array of items
  public getAllItems(): Observable<Item[]> {
    return this.getAllItemsCollection()
      .snapshotChanges()
      .pipe(
        map(item => {
          const items: Item[] = [];
          item.map(a => {
            const data = a.payload.doc.data() as Item;
            items.push(data as Item);
          });
          console.log(items);

          return items;
        }));
  }

  // Return item by passing an id
  public getItem(id: string): Observable<Item> {
    const item = this.afDatabase
      .collection<Item>('items')
      .doc<Item>(id)
      .valueChanges();
    return item;
  }
}
