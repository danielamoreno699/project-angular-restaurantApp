
import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { IUserFormData } from 'src/app/shared/models/user.models';
import { DisablingFormDirective } from 'src/app/shared/directives/user-profile/disabling-form.directive';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  @ViewChild('template')
  //private template: TemplateRef<any>


 public isVisible : boolean;
 
  public myForm : FormGroup;


  
  public userDetails : IUserFormData;


  public isUserFormSubmitted: boolean;

  public isDisabled : boolean;

 
 



  constructor(private formBuilder: FormBuilder, private router : Router) { 
    this.myForm = {} as FormGroup;

    
    //this.userAddress = {} as IUserFormData;
    this.userDetails = {} as IUserFormData;

    this.isUserFormSubmitted = false
    this.isDisabled = true
    this.isVisible = false

   
    
  }

  ngOnInit(): void {
      this.initializeUserForm()

     

    }
  
      public initializeUserForm(): void{
        this.myForm = new FormGroup({
            fname : new FormControl(''),
            lname : new FormControl(''),
            email : new FormControl('')
        })
    
      }

      
    get userFormControls(){
      return this.myForm.controls;
    }



      enabling (){
         
      }


      public navigateToViewProfile(template: TemplateRef<any>){
        this.isVisible = !this.isVisible
          //this.router.navigate(['/view-profile']);

      }

      public onSubmit1(){
       
       this.isUserFormSubmitted =true

        //let x= this.myForm.get(['fname'])?.valueChanges
        let values = this.myForm.value

        

       //this.router.navigate(['/view-profile', { queryParams: JSON.stringify(values) }])
        //console.info(this.myForm.value)
      
    
    }

    public onSubmit2(){
      this.isUserFormSubmitted =true


    }

    public onSubmit3(){
      this.isUserFormSubmitted =true

    }






  }



