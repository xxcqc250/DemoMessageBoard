// @Injectable({
//   providedIn: 'root'
// })

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  constructor( private http: HttpClient ) { }

  
  configUrl = 'assets/users.json';

  // 取得所有使用者帳戶資訊
  getConfig() {
    return this.http.get(this.configUrl);
  }

}
