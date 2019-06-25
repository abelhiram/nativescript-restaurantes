import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        
        //this.items = this._itemService.getItems();
        getJSON("http://holltec.mx/restaurantes/public/Ingredientes/").then((r: any) => {
            this.items=r;
        }, (e) => {
        });
    }
}
