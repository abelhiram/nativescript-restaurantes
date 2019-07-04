import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { DataService} from "../shared/data.service"



@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    getData :string = "chile";
    postData : string;
    
    items: any = [];

    constructor(private page: Page,private dataService:DataService) { 
    }

    test(){
        this.dataService.getDatos(this.getData)
        .subscribe(
            response =>{
                this.items = response;
            },
            error => console.log(error)                   
        )
    }

    ngOnInit():any {
        
    }
    


}
