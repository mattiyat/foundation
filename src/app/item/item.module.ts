import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemListComponent } from "./item-list/item-list.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemListComponent,],
  imports: [CommonModule, SharedModule]
})
export class ItemModule {}
