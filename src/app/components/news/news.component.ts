import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  articles: Array<any>;

  constructor(private news: NewsService) {}

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    return this.news.getNews().subscribe((data) => {
      this.articles = data['articles'];
    });
  }

  // searchNews(source: string) {
  //   return this.news.getNewsById(source).subscribe((data) => {
  //     this.articles = data["article"];
  //   });
  // }
}
