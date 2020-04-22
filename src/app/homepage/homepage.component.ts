import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item/item.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  watcher$: Observable<any>

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.watcher$ = this.itemService.getAllItems()
  }

}
