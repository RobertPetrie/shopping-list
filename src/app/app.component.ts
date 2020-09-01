import { Component } from '@angular/core';
import { Item } from './Item';
import { ItemList } from './itemList';

@Component({
  // this is the html tag
  selector: 'app-root',

  // the view being used
  templateUrl: './app.component.html',

  // the style being used
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // this is the data for our database
  private list = new ItemList("Robert", [
    new Item("Eggs", true),
    new Item("Ham", false),
    new Item("Roast Beef", false),
    new Item("Bread", false),
    new Item("Cheese", false),
    new Item("Milk", false),
    new Item("Cookies", false),
    new Item("Greek Yogurt", false),
    new Item("Banana", false),
    new Item("Avocado", false),
    new Item("Orange Juice", false)
  ]);

  // returns the user name
  get userName(): string {
    return this.list.userName;
  }

  // returns the entire items list
  get itemList(): readonly Item[] {
    return this.list.allItems;
  }

  // returns the items that have been picked up
  get pickedUpItemList(): readonly Item[] {
    return this.list.allItems.filter(x => x.pickedUp);
  }

  // returns the items that haven't been picked up
  get outstandingItemList(): readonly Item[] {
    return this.list.allItems.filter(x => !x.pickedUp);
  }

  // returns the number of items
  get totalItems(): number {
    return this.list.allItems.length;
  }

  // returns the number of items that are picked up
  get totalItemsPickedUp(): number {
    return this.list.allItems
      .filter(x => x.pickedUp).length;
  }

  // returns the number of items that are not picked up
  get totalItemsNotPickedUp(): number {
    return this.list.allItems
      .filter(x => !x.pickedUp).length;
  }
}
