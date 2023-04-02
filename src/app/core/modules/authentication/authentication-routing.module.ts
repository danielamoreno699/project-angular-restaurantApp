import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationUserComponent } from './authentication-user/authentication-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponentComponent } from '../homepage/home-component/home-component.component';


const AuthRoutes: Routes = [

  {path: '', component: HomeComponentComponent, canActivate:[AuthGuard] },
 
  {path: 'authentication-user', component: AuthenticationUserComponent},
  {path: 'login-user', component: LoginUserComponent },
  {path: ' user-password-reset', component: UserPasswordResetComponent    }
]




  

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
