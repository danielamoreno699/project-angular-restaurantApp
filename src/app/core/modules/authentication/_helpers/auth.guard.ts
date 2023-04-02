import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
        constructor ( private router: Router, private authenticationService : AuthenticationLogInService){}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            const currentUser = this.authenticationService.currentUser;

            if (currentUser){
                return true
            }

            this.router.navigate(['/login-user'], {queryParams: {returnUrl: state.url}});


            return false 
        }
    
}