import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable()
export class AccountService {

  public apiPath: string;//Api URL where we need to send our data & perform related operations
  constructor(ds: DataService, private http: HttpClient) {
    this.apiPath = ds.apiPath;
}
findAdmin(user) {//Finding User with username & password
  return this.http.post(this.apiPath + 'user/findAdmin', user, { responseType: 'text' });
}
getUser(user) {//Getting User with userId
  return this.http.post(this.apiPath + 'user/getUser', user, { responseType: 'text' });
}

getUsers(user) {//Getting User with userId
  return this.http.post(this.apiPath + 'user/getUsers', user, { responseType: 'text' });
}



getWeb() {//Getting User with userId
  return this.http.post(this.apiPath + 'user/getWeb', {});
}
}