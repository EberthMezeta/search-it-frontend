import { UserPostRequest } from './../../interfaces/user-post-request';
import { ResponsePostUsers } from './../../interfaces/response-post-users';
import { CookieService } from 'ngx-cookie-service';
import { User } from './../../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://artrune.com:8093/users';

  constructor(private httpClient: HttpClient,private cookieService: CookieService) { }

  public getUsers(): Observable<User[]>{
    let headers = this.getHeaders();
    return this.httpClient.get<User[]>(this.URL, {headers});
  }

  public putUsers(user : User) : Observable<User> {
    let headers = this.getHeaders();
    return this.httpClient.put<User>(this.URL,user,{headers});
  }

  public postUsers(user : UserPostRequest) : Observable<User> {
    let headers = this.getHeaders();
    return this.httpClient.post<User>(this.URL, user, {headers});
  }

  public deleteUsers(id: string){
    let headers = this.getHeaders();
    return this.httpClient.delete(this.URL+ "?user_id=" + id,{headers});
  }

  public getHeaders(): HttpHeaders {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json'});
    return headers;
  }
}
