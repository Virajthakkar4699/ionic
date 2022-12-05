import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public topic: any;
  public result: any;
  public newsData: any;
  constructor(public api: ApiService) {}

  search() {
    this.api.getNews(this.topic).subscribe((result) => {
      // console.log(result);
      this.result = result;
      this.newsData = this.result.articles;
      console.log(this.newsData);
    });
  }
}
