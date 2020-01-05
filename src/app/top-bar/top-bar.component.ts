import { Component, OnInit, OnChanges, Input  } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }
  
  visitor_name:String ;

  ngOnInit() {
    localStorage.clear();
    localStorage.setItem('user_name', "訪客");
  }
  
  ngOnChanges(){
    
    
  }
  
  // 判斷是否登入
  readLocalStorageValue() {
    this.visitor_name = localStorage.getItem('user_name');
    return localStorage.getItem('user_id');
  }

  // 登出 => 清除所有資訊
  logout(){
    localStorage.clear();
    localStorage.setItem('user_name', "訪客");
  }

}
