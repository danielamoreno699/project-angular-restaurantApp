import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { enviornment } from '../../modules/authentication/_environment/enviornment';
import { payment  } from 'src/app/shared/models/user.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http: HttpClient) { }


  public userPayment(formPayment:payment): Observable<payment>{
    return this.http.post<payment>('http://localhost:3000/users', formPayment)



  }

  


 
}
