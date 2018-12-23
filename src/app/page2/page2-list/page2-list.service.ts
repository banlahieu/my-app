import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class Page2Service {

    PROJECT_TOKEN = 'tOo_FF8Rqazv';

    API_KEY = 'tAo4bVJHMm8E';

    url = 'https://www.parsehub.com/api/v2/projects/tOo_FF8Rqazv/last_ready_run/data';

    constructor(private http: HttpClient ){
        
    }

    getData() {

        let headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Authorization', this.API_KEY);
        
        let params = new HttpParams();

        params.append('api_key', this.API_KEY);
        params.append('format', 'json');

        return this.http.get(this.url, {headers, params}).subscribe( res => {
            console.log(res);
        });
    }

}