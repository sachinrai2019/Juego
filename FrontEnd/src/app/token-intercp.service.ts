import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService} from './auth.service'

@Injectable()
export class TokenIntercpService implements HttpInterceptor {

  constructor( private auth:AuthService) { }

  intercept(req,next){
    
    let tokenreq=req.clone({
    setHeaders:{
      Authorization:'Bearer '+this.auth.getTocken()
    }
    })
    return next.handle(tokenreq)
  }
}
