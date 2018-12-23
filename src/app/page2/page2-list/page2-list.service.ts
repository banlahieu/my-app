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

        // headers = headers.append('Access-Control-Allow-Origin','*');

        // headers = headers.set('Content-Type', 'text/plain');
        // headers = headers.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
        // headers = headers.set('Accept-Encoding', 'gzip, deflate, br');
        // headers = headers.set('Cache-Control', '0');
        // headers = headers.set('Access-Control-Allow-Credentials', 'true');
        // headers = headers.set('Server', 'nginx/1.13.7');
        // headers = headers.set('Content-Encoding', 'gzip');
        // headers = headers.set('Accept-Ranges', 'bytes');
        // headers = headers.set('Strict-Transport-Security', 'max-age=15724800');
        // headers = headers.set('Etag', '5c1f1112-13c');
        // headers = headers.set('body', '');
        
        let params = new HttpParams();

        params = params.set('api_key', this.API_KEY);

        return this.http.get(this.url, { headers: headers, params: params});
    }

}