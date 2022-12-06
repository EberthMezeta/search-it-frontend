import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private URL = 'http://artrune.com:8093/emailsender';

  constructor(private httpClient:HttpClient,private cookieService : CookieService) { }

  public sendEmail(email: string, link: string): Observable<any>{
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json', 'Content-Type': 'application/json'});

    return this.httpClient.post(this.URL, {"email": email, "link": link}, {headers});
  }
}
