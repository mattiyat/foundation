import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: AngularFirestoreCollection<Item[]> = null;
  item: AngularFirestoreDocument<Item> = null;
  userId: string;

  constructor(private db: AngularFirestore) { }

  public getItemsCollection() : AngularFirestoreCollection<Item[]>{
    if(!this.userId) return;
    this.db.collection(`items/${this.userId}`).valueChanges()
      .subscribe(val => console.log);   //
    return this.items
  }

  public getItemDocument() : AngularFirestoreDocument<Item> {
    if(!this.userId) return;
    this.item = this.db.doc<Item>(``)
    return this.item
  }

  createItem(item: Item[]) {
    this.items.add(item)
  }
}
