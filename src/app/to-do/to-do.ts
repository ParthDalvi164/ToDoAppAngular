import { Component } from '@angular/core';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})
export class ToDo {
  toDoItems: ToDoItem[] = [];
  tempCategory: string = "";
  tempTitle: string = "";
  tempDescription: string = "";
  tempDone: boolean = false;
  newToDoItem: ToDoItem = new ToDoItem("", "", "", false);

  addItem() {
      this.newToDoItem = new ToDoItem(
      this.tempTitle,
      this.tempDescription,
      this.tempCategory,
      this.tempDone
    )
    this.toDoItems.push(this.newToDoItem);
    this.tempTitle = "";
    this.tempCategory = "";
    this.tempDescription = "";
  }

  removeItem(index: number) {
    this.toDoItems.splice(index, 1);
  }

  markDoneItem(index: number) {
    this.toDoItems[index].Done = true;
  }
}
