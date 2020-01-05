import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from '../articles';
import { comment } from '../comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any; // 文章
  allComment: comment[] = [
    {
      date: 1,
      title: "First Title",
      name: "訪客",
      content: "First Commant",
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    // angular 2 取得url parameter用法
    this.route.params.subscribe( params =>{
      // 取得 article id
      const articleId = params['articleId'];
      // 透過article id撈文章
      this.article = articles.find(data=> data.id==articleId);
      // console.log('articleId : '+ this.article);
    });
      
    // angular 4+ 取得url parameter用法
    // this.route.paramMap.subscribe(params => {
    //   this.articleId = articles[+params.get('articleId')];
    // });

    
    console.log(this.article);
  }
  
  // 將留言push到array
  addComment(comment_obj){
    console.log(comment_obj);
    this.allComment.push(comment_obj);
  }

}
