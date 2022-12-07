import { Observable } from 'rxjs';
import { CurrentUser } from './../interfaces/current-user';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private URL = 'http://artrune.com:8093/users/me';


  constructor(private httpClient : HttpClient, private cookieService : CookieService) { }


public getCurrentUser() : Observable<CurrentUser> {
    let headers = this.getHeaders();
    return this.httpClient.get<CurrentUser>(this.URL, {headers});
  }


  public getHeaders(): HttpHeaders {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json'});
    return headers;
  }

}
