import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
url="http://localhost:5000/"
  constructor(private http:HttpClient) { }

  adduser(username){
   const data={'UserName': username}
   console.log(data)
    return this.http.post<any>(this.url+'generate',data);
  }
  deleteUser(username){
    const data={'UserName': username}
    console.log(data)
     return this.http.post<any>(this.url+'delete',data);
   }
  getUsers(){

    return this.http.get<any>(this.url+'allUser');
  }


}
