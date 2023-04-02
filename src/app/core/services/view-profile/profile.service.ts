import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { IUserFormData } from 'src/app/shared/models/user.models';



export interface ProfileMap{
  [email: string]: IUserFormData,
  
  
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


 

  private userProfile = new Subject<IUserFormData[]>();
  public emailInput: ProfileMap
 // private refreshSub$ = new BehaviorSubject<void>(undefined);
 
  


 public userProfile$: Observable<IUserFormData[]> = this.userProfile.asObservable();



  //public setUserProfile( userProfile: IUserFormData[]) : void{
    //this.userProfile.next(userProfile)
  //}


  constructor() {
      this.emailInput = {};




   }

   
      
   //public userProfile$ : Observable<IUserFormData[]> = this.refreshSub$.pipe(
    //map((): ProfileMap[]=> Object.values(this.emailInput))
  //)


}
