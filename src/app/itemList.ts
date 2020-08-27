import { Item } from "./Item";

// this class is an array of Items
export class ItemList {

    // userName is the user the list belongs to
    // items are an array of Item's
    constructor(public userName: string, private items: Item[] = []) {
        // empty
    }

    // returns the entire read only array
    get allItems(): readonly Item[] {
        return this.items;
    }

    // adds a single item to the array
    addItem(itemName: string) {
        this.items.push(new Item(itemName));
    }
}
