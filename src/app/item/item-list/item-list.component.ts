import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item/item.service';
import { Item } from '../../shared/item/item.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemSub: Subscription;
  items: Item[];
  image: string;
  text: string;
  title: string;
  itemsSub: Subscription;


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemSub = this.itemService.getAllItems()
      .subscribe()

      this.itemsSub = this.itemService.getAllItems().subscribe(items => {
        this.items = items;
        return items;
      });
  
  }



}
