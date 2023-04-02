import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/shared/models/foodlist.model';
import { IUserFormData } from 'src/app/shared/models/user.models';
import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';
import { AuthenticationSService } from 'src/app/core/services/authentication/authentication-s.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {


   currentUser: IUserFormData;

   users:IUserFormData[] =[];
  searchRestaurant: string;

  constructor( private authentication: AuthenticationSService, private logIn : AuthenticationLogInService, private router: Router) { 
    this.currentUser = this.logIn.currentUserValue
  
    
    this.searchRestaurant= ''
    

  }

  ngOnInit(): void {


  }

  public deleteUser(id: number){
    this.authentication.delete(id)
         .pipe(first())
          .subscribe(()=> this.loadAllUsers());
  }

  private loadAllUsers(){
    this.authentication.getAll()
        .pipe(first())
      .subscribe( users => {this.users = users})
  }
  logOut(){
    this.logIn.LogOut();
    this.router.navigate(['/login-user'])
  }
 
          
  }
  


          
