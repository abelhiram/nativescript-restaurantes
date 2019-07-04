import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { Image } from "tns-core-modules/ui/image";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: IDataItem[];

    constructor(private _itemService: DataService) { }



    ngOnInit(): void {
        
        //this.items = this._itemService.getItems();
        getJSON("http://holltec.mx/restaurantes/public/locanesNat/").then((r: any) => {
            this.items=r;
        }, (e) => {
        });
        
    }
}
