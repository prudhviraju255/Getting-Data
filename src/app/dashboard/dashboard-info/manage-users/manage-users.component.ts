import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-manage-users',
templateUrl: './manage-users.component.html',
styleUrls: ['./manage-users.component.css'],

})
export class ManageUsersComponent implements OnInit {
  userDetails:any = [];
detail:Detail={
  added_on:'',
  username:'',
  uemail:'',
  upassword:'',
};

rForm: FormGroup;
post:any;
username: String = '';
uemail: String = '';
upassword: String = '';

constructor(private router: Router,private fb:FormBuilder,private dataService: DataService, private accountService: AccountService) {
this.rForm = fb.group({
'username':['', Validators.required],'uemail':['', Validators.required],'upassword': [ '', Validators.required ]
});
}

ngOnInit() {

  this.accountService.getWeb().subscribe(
    response => {
    console.log(response);
    this.userDetails = response;
    },
    err => {
    console.error('User Not found');
    })
  }
}

interface Detail{
  added_on:string
  username:string,
  upassword:string,
  uemail:string,

}