import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    

    constructor(private page: Page) {
   
    }



    ngOnInit():any {
        //this.page.actionBarHidden = true;
    }
    


}
