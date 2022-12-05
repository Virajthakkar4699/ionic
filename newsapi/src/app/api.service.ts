import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apikey: any = '4870ac9449424eb999f8d0ea1107c098';

  constructor(public http: HttpClient) {}

  getNews(topic: any) {
    const url = `https://newsapi.org/v2/everything?q=${topic}&from=2022-11-04&sortBy=publishedAt&apiKey=${this.apikey}`;

    return this.http.get(url);
  }
}
