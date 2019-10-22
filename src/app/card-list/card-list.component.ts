import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item/item.service';
import { Item } from '../shared/item/item.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  image: string;
  text: string;
  title: string;
  itemsSub: Subscription;
  items: any[];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemsSub = this.itemService.getAllItems().subscribe(items => {
      this.items = items;
      return items;
    });

  }


}
