import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemList } from "./item-list/item-list";
import { ToDo } from "./to-do/to-do";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemList, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyTestApp');
}
