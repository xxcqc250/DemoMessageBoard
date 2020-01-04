import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorizationService } from '../service/authorization.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    {
      provide: AuthorizationService, 
      useClass: AuthorizationService
    }
  ]
})
export class LoginComponent implements OnInit {

  users: any; // 所有只用者帳戶資訊
  login_message: String; // 提交表單後的訊息

  constructor(
    private authorizationService:AuthorizationService,
    private router: Router
    ) { }

  ngOnInit() {
    
    
  }

  loginForm = new FormGroup({
    account: new FormControl('root'),
    password: new FormControl('root')
  });

  // submit form
  onSubmit(){
    console.warn(this.loginForm.value);

    // 取得所有使用者資訊
    this.users = this.authorizationService.getConfig();

    this.users.subscribe( data=>{
      // 驗證使用者帳密是否正確
      const result = data.find(GetAuthResult, this.loginForm);
      function GetAuthResult(element, index, array) {
        return element.account == this.value.account && element.password == this.value.password;
      }
      
      if(result){
        // 有回傳資料，將使用者id存入local storage
        localStorage.setItem('user_id', result['id']);
        localStorage.setItem('user_name', result['name']);
        console.log("user_id : "+localStorage.getItem('user_id'));
        console.log("user_name : "+localStorage.getItem('user_name'));
        this.login_message = "登入成功";
        
        // 回到首頁
        this.router.navigate(['/']);
      }
      else{
        // 登入失敗
        this.login_message = "帳號密碼錯誤";
      }

    });
  }

}
