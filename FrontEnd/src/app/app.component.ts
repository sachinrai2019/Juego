import { Component , OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RIAG';
  constructor( private auth:AuthService,private route:Router,private spinner: NgxSpinnerService){}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  
    
  

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])

  }

}
