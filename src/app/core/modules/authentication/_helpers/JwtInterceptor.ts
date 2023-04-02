import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';



@Injectable()
export class JwtInterceptor  {
    constructor(private authenticationService: AuthenticationLogInService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser  && currentUser.token){
            req = req.clone({
                setHeaders:{
                    Authotization: `Bearer ${currentUser.token}`
                }
            })
        }

        return next.handle(req)
    }

}
