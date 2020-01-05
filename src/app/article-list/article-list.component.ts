import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  // 取得所有文章資訊
  articles = articles;

  constructor() { }

  ngOnInit() {
  }

  // 圖片載入失敗，改用網址
  errorHandler(event) {
    if(event.target.id == 'img_message_board'){
      event.target.src = "https://i.imgur.com/VegErHY.jpg";
    }
    else if(event.target.id == "img_book"){
      event.target.src = "https://i.imgur.com/z5Tlpe8.png";
    }
    
  }
}
