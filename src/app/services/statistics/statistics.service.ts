import { Statistics } from './../../interfaces/statistics';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private URL = 'http://artrune.com:8093/stats';

  constructor(private httpClient : HttpClient) { }

  public getStatistics(): Observable<Statistics> {
    return this.httpClient.get<Statistics>(this.URL);
  }
}
