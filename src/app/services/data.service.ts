import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Http,Response} from  '@angular/http';
// import { Observable } from '../../node_modules/rxjs';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

public apiPath: string = 'http://localhost:3000/';
//private _getUrl ="/api/clients";

constructor( private http:HttpClient) { }


// getClients() : Observable<Client[]>{
// return this.http.get<Client[]>(this.apiPath + 'data/getClients');
// }

// getClients(){
//   return this._http.get(this._getUrl).map((response: Response) => response.json());
// }





}


// interface Client{
// nameoftheclient:'string';
// emailid:'string';
// password:'string';
// confirmpassword:'string';
// }

