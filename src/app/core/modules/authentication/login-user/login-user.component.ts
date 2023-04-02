import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationLogInService } from 'src/app/core/services/authentication-logIn/authentication-log-in.service';
import { AuthenticationSService } from 'src/app/core/services/authentication/authentication-s.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;
  submitted: boolean;
  returnUrl : string;
  error = '';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, 
    private auths: AuthenticationSService, private userLog: AuthenticationLogInService, private alert: AlertService  ) {
        if(this.userLog.currentUserValue){
          this.router.navigate(['/'])
        }

    this.loginForm = {} as FormGroup;
    this.submitted = false;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  
   }

  ngOnInit(): void {
      this.initializer()

  }

  


  private initializer(){
    this.loginForm = this.formBuilder.group({
          email: [ '', Validators.required],
          password: ['', Validators.required]


    })
  }

  

  onSubmit(){
    this.submitted = true;
    this.alert.clear();

    if(this.loginForm.invalid){
      return; 
    }

    this.loading = true;
    this.userLog.login(this.userFormControls['email'].value, this.userFormControls['password'].value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl])
          }, error =>{
            this.alert.error(error);
            this.loading = false
          }
        )
  }

  get userFormControls(){
    return this.loginForm.controls;
  }





}
