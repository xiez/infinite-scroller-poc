//our root app component
import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from './services/hackernews.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  news = [];
  page = 1;

  constructor(private hnService: HackerNewsService) {}

  ngOnInit() {
    this.getNews(this.page)
  }

  getNews(page: number): void {
    this.hnService.getNews(page)
      .subscribe(res => {
        this.news = [...this.news, ...res]
      })
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    this.page += 1
    this.getNews(this.page)

  }

 onUp(ev) {
    console.log('scrolled up!', ev);

    this.direction = 'up';
  }

}
