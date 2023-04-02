
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private autehnticationService: AuthenticationLogInService){}

    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request).pipe(catchError(err => {
            if (err.status ==401){

                this.autehnticationService.LogOut();
                location.reload()

            }

            const error = err.error.message || err.statusText;
            return throwError(error)
        }))
    }
}