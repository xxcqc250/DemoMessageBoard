import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  CommentContent = '';
  CommentTitle = "";


  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(){
    let name = localStorage.getItem('user_name');
    console.log(this.CommentTitle);
    console.log(this.CommentContent);
    let comment_obj= {
      date: (new Date()).getTime(),
      name: name,
      title: this.CommentTitle,
      content: this.CommentContent.replace("\r\n", "\\r\\n"),
    };

    this.addComment.emit(comment_obj);

    // 將輸入的內容清除
    this.CommentContent="";
    this.CommentTitle="";

  }

}
