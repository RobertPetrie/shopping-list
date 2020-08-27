// the class name
export class Item {

    // the constructor with pickedUp being set as false
    constructor(nameValue: string, pickedUpValue: boolean = false) {
        this.name = nameValue;
        this.pickedUp = pickedUpValue;
    }

    // these are properties
    name: string;
    pickedUp: boolean;
}
