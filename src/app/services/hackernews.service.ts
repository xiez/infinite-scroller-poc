import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { News } from '../models/news';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private newsUrl = 'http://node-hnapi.herokuapp.com/news'

  constructor (
    private http: HttpClient,
  ) {}

  getNews(page: number): Observable<News> {
    return this.http.get<News[]>(`${this.newsUrl}?page=${page}`)
      .pipe(
        tap(_ => console.log(`fetched news, page: ${page}`))
      )
  }
}
