import { Injectable } from "@angular/core";
//import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

export interface IDataItem {
    id: number;
    nombre: string;
    imagen_destacada: string;
    activo: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor( private http: HttpClient) { }
    
    getDatos(data:string){
        return this.http.get("http://holltec.mx/restaurantes/public/crearCategoria?nombre="+data);
    }
 
}
