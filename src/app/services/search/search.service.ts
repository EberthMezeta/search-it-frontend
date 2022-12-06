import { DocsResponse } from './../../interfaces/docsResponse';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private URL = 'http://artrune.com:8093/query?query=';



  constructor( private http : HttpClient, private cookieService: CookieService) { }

  public search(searchString: string): Observable<DocsResponse> {

    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer});

    return this.http.get<DocsResponse>(this.URL + searchString, {headers});
  }

}
