import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../auth.service'
import {  Router } from '@angular/router'
import * as toastr from "toastr";
import { login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerUserData= new login()
  
  constructor( private auth:AuthService,private _route:Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.registerUserData)
    if(this.registerUserData.emailId==''){
      toastr.error('Required fields cannot be empty')
    }else {

    this.auth.login(this.registerUserData).subscribe(
      res=>{
        console.log(res);

        if(res.token){
          toastr.success("Login successful")
          localStorage.setItem('token',res.token);
          this._route.navigate(['/specialEvents'])
        }
        else{
          toastr.error(res);
        }
      
      },err=>{console.log(err)}
    )
  }
  }
}