import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  apiKey = 'f00cd41aaa364bef9d4584b69d86e425';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + this.apiKey);
  }

}
