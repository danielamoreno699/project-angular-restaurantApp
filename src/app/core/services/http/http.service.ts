import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodList } from 'src/app/shared/models/foodlist.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }

          public getFoodList(): Observable<FoodList[]>
          {
                return this.http.get <FoodList[]>('http://localhost:3000/foodList')


    }




}
