import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<any>(this.baseUrl + 'articles');
  }

  getPaidArticles(){
    return this.http.get<any>(this.baseUrl + 'paid_articles');
  }
}
