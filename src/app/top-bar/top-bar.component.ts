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
    console.log('set');
    
  }
  
  readLocalStorageValue() {
    this.visitor_name = localStorage.getItem('user_name');
    return localStorage.getItem('user_id');
  }

  logout(){
    localStorage.clear();
    localStorage.setItem('user_name', "訪客");
  }

}
