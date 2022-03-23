import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private loginService:LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newReq=req;
    let token=this.loginService.getToken()

    console.log("INTERCEPTOR",token);

    if(token!=null){
      newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    }
    return next.handle(newReq)
  }
}
