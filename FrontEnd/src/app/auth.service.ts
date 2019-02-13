import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService {
private url="http://localhost:5000/"
  constructor(private http:HttpClient) { }

    registeRr(user){
console.log('REGISTER')
      return this.http.post<any>(this.url+'register',user)
    }

    login(user){
      console.log('Login')
            return this.http.post<any>(this.url+'login',user)
          }
  

          loggedIn(){
     return !!localStorage.getItem('token')

          }

          getTocken(){
            return localStorage.getItem('token')
       
                 }
}
