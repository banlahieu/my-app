import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class Page1Service {

    url = 'abc';

    constructor(private http: HttpClient){
        
    }

    insert(name: string){
        return this.http.post<any>(this.url, name);
    }

}