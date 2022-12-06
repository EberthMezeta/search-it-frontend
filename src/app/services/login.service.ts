import { Token } from './../interfaces/token';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_SERVICE = 'http://artrune.com:8093/token';

  constructor(private http: HttpClient) { }

  public getToken (username:string, password:string):Observable<Token> {

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    return this.http.post<Token>(this.URL_SERVICE,params, {headers});
  }
}
