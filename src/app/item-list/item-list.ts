import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
  listItems:string[] = [];
  tempItem:string = "";

  addItem() {
    if(this.listItems.length >= 5) {
      alert("Max limit of 5 items reached!");
      return;
    }
    this.listItems.push(this.tempItem);
  }
}
