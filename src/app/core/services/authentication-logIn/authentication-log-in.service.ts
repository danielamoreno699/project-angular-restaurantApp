import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserFormData } from 'src/app/shared/models/user.models';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationLogInService {

      private currentUserSubject: BehaviorSubject<IUserFormData>;
      public currentUser: Observable<IUserFormData>

  constructor( private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUserFormData>(JSON.parse(localStorage.getItem('currentUser')  || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }


   public get currentUserValue(): IUserFormData{
      return this.currentUserSubject.value
   } 


   login(email: string, password: string){
      return this.http.post<IUserFormData>('http://localhost:3000/users/login-user', {email, password})

          .pipe(map(user => {
                if(user && user.token){
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user)

                }
                  return user 

          }))

   }

   public LogOut(){
      localStorage.removeItem('currentUser');
        this.currentUserSubject.next(this.currentUserValue)
   }
}
