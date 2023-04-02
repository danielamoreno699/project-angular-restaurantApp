import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserFormData } from 'src/app/shared/models/user.models';
import { enviornment } from '../../modules/authentication/_environment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSService {



  constructor(private http: HttpClient) { }


  public sendFormDetails (formData: IUserFormData): Observable <IUserFormData>{
    return this.http.post<IUserFormData>(`${enviornment.apiUrl}/users/authentication-user`, formData)
  }

  public getAll(){
    return this.http.get<IUserFormData[]>(`${enviornment.apiUrl}/users/`);
  }

  public delete( id: number){
     return this.http.delete(`${enviornment.apiUrl}/users/${id}`);
  }

  
}
