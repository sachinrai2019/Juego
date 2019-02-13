import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../auth.service';
import { register} from './register'
import { Router} from '@angular/router'
import * as toastr from "toastr";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserDat = new register()
  constructor( private auth:AuthService,private route:Router) { }

  ngOnInit() {
  }

  Register(){
    console.log(this.registerUserDat)

if(this.registerUserDat.userName =='' && this.registerUserDat.emailId == '' && this.registerUserDat.password=='' )
{
  toastr.error('Respective fields cannot be empty');
}
else if(this.registerUserDat.userName ==''){
      toastr.error('UserName is empty');

    }
    else  if(this.registerUserDat.emailId == '' || this.registerUserDat.emailId.length < 4 || !this.registerUserDat.emailId.includes('@')){
      toastr.error('invalid emailId ');


    }
    else if ((this.registerUserDat.password == '' || this.registerUserDat.cpassword == '')){
      toastr.error("password cant't be empty");

      
    }
    else  if((this.registerUserDat.password != this.registerUserDat.cpassword)){
    
      toastr.error("password don't match");
      
    }else{

    this.auth.registeRr(this.registerUserDat).subscribe(
      res=>{
        console.log(res);
       

      if(res.token){
        toastr.success("Sucessfully registerd")
     // localStorage.setItem('token',res.token);
      this.route.navigate(['/login'])}
      else{
        toastr.warning(res)
      }
      },err=>{console.log(err)}
    )
  }
  }
}
