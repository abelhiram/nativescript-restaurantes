import { Injectable } from "@angular/core";


export interface IDataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor() { }

    private items = new Array<IDataItem>(     
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
