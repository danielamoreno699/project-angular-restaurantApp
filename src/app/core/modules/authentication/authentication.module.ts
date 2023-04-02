import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationUserComponent } from './authentication-user/authentication-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/JwtInterceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackEndProvider } from './_helpers/fakebackend';
import { AlertComponent } from './alert/alert.component';







@NgModule({
  declarations: [
    AuthenticationUserComponent,
    LoginUserComponent,
    UserPasswordResetComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],

  exports:[
    AuthenticationUserComponent,
    LoginUserComponent,
    UserPasswordResetComponent

  ],

  providers :[
    {provide : HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackEndProvider], 

})
export class AuthenticationModule { }
