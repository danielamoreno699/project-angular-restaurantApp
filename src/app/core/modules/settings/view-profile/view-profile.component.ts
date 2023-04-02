import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IUserFormData } from 'src/app/shared/models/user.models';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  public  profileView: IUserFormData;

  public name : string;
  
  constructor(private activateRoute: ActivatedRoute, private router : Router ) { 

    this.profileView = {} as IUserFormData
    this.name = ''
    
   
  }

  public ngOnInit(): void {

    this.getUser()

   
  
  }

  async  getUser(){
    

      this.activateRoute.paramMap.subscribe(async (params: any) => {

      try {

        const data = await params.json();

        console.log('response to data', data);

      } catch (error) {

        console.log('error happened');
        console.error(error);
      }





      console.log('params', params)
      let x = params['lname'];
      //this.name = params.get('lname');
      console.log('profile', this.profileView);
      console.log('name ', x);

    })

   
  }
    

  



  GoBack(){
    this.router.navigate(['/user-profile']);
  }

}
