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

  constructor(private httpClient : HttpClient) {  }





}
