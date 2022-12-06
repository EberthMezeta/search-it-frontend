import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { ResponseUpload } from './../../interfaces/response-upload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private URL_DOCUMENT_VIEW_SERVICE = 'http://artrune.com:8093/upload';
  private URL_DOCUMENT_UPLOAD_SERVICE = 'http://artrune.com:8093/file/';
  private URL_DOCUMENT_DOWNLOAD_SERVICE = 'http://artrune.com:8093/download/';

  constructor(private httpClient : HttpClient, private cookieService:CookieService) {  }

  public uploadDocument(file: File): Observable<ResponseUpload> {
    const headers = this.getHeaders();
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<ResponseUpload>(this.URL_DOCUMENT_UPLOAD_SERVICE, formData, {headers});
  }

  public downloadDocument(filename: string){
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer, 'accept': 'application/json'});
    return this.httpClient.get(this.URL_DOCUMENT_DOWNLOAD_SERVICE + filename,{headers, responseType: 'blob'});
  }

  private getHeaders(): HttpHeaders {
    let Bearer = this.cookieService.get('token');
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + Bearer});
    return headers;
  }




}
