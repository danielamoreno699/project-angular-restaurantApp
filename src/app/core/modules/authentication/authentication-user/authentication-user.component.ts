import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthenticationSService } from 'src/app/core/services/authentication/authentication-s.service';
import { IUserFormData } from 'src/app/shared/models/user.models';
import { MustMatch } from 'src/app/shared/directives/must-match/must-match.validator';
import { Router } from '@angular/router';
import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent implements OnInit {

  loading = false
  public userForm : FormGroup;
  public userDetails : IUserFormData;
  public isUserFormSubmitted: boolean;
  public isUserRegistered : Boolean

  constructor( private formBuilder: FormBuilder, public authService : AuthenticationSService, public userLog: AuthenticationLogInService,
    private router: Router, private alert: AlertService) 
    {
    
      if( this.userLog.currentUserValue){
        this.router.navigate(['/'])
      }
     this.userForm = {} as FormGroup;
     this.userDetails = {} as IUserFormData;
     this.isUserFormSubmitted = false;
     this.isUserRegistered = true
   }

  public ngOnInit(): void {
    this.initializeUserForm();
  }

  public initializeUserForm(): void{
    this.userForm = this.formBuilder.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password : ['', Validators.required,Validators.minLength(5),Validators.maxLength(10)],
      cpassword :['', Validators.required, Validators.minLength(5),Validators.maxLength(10)],
      disclaimer :[false]


    },{
      validator:MustMatch('password','cpassword')
    }
    
    )   
  
  
  }
    
    get userFormControls(){
      return this.userForm.controls;
    }

    public onSubmit(){
          this.isUserFormSubmitted =true
          //this.userDetails = this.userForm.getRawValue();
          //this.authService.sendFormDetails( this.userDetails).subscribe((val => {
            //  console.log(val)
            
              this.alert.clear();

              if(this.userForm.invalid){
                return;
              }

            this.loading = true;
            this.authService.sendFormDetails(this.userForm.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.alert.success('Registration succesful', true);
                  this.router.navigate(['/login-user'])
                },
                error =>{
                  this.alert.error(error);
                  this.loading = false
     } );

    }

            
          

    public reset():void{
    this.userForm.reset();
    }
  }
  
  
  
