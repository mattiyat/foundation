import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Item } from '../services/item/item.model';
import { AngularFireModule } from '@angular/fire';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public item: Item;
  public items: Item[];

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getSlideDecks();
    this.itemService.getItemsCollection();
  }

  getCollection() {
    return;
  }
}
