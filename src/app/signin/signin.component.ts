import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  admin: Admin = {
   email: '',
   password: ''
    };
    
    rForm: FormGroup;
    post:any;
    email:String= '';
    password: string = '';
    constructor(private router: Router, private fb: FormBuilder, private dataService: DataService, private accountService: AccountService) {
      this.rForm = fb.group({
        'email':[null,   [Validators.required, Validators.email]],
        'password': ['', Validators.required],
      });
     }

  ngOnInit() {
  }

  onPressEnter(event){
    if(event.keyCode == 13) {
      this.signIn();
    }
  }
  // onPressEnter(event){
  //   if(event.keyCode == 13) {
  //     this.signIn();
  //   }
  // }

  signIn(){
    // console.log('this.data');
    // console.log(this.admin.email);
    // console.log(this.admin.password);
    // let body = {
    //   email:this.admin.email,
    //   password: this.admin.password,
    // }





    if(this.admin.email && this.admin.password) {
    this.accountService.findAdmin(this.admin).subscribe(
      response => {
        console.log(response) 
        
        this.router.navigate(['dashboard-info'])
      },
      err => {
        console.log('Incorrect email and password');
      })
      }
  }
}

interface Admin {

  email: string;
  password: string;
  
  }
