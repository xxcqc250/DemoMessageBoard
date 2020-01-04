import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = articles;

  constructor() { }

  ngOnInit() {
  }

  errorHandler(event) {
    if(event.target.id == 'img_message_board'){
      event.target.src = "https://i.imgur.com/VegErHY.jpg";
    }
    else if(event.target.id == "img_book"){
      event.target.src = "https://i.imgur.com/z5Tlpe8.png";
    }
    
  }
}
