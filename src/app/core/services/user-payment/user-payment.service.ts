import { LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OrderPlacement } from 'src/app/shared/models/orderPlace';
import { PaymentServiceService } from '../payment-service/payment-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserPaymentService {

  constructor( private paymentS: PaymentServiceService) { }

  
  

  private UserInfoOrder : BehaviorSubject<OrderPlacement> = new BehaviorSubject<OrderPlacement>(
    {feedId: 0 ,
    dishName:  [],
    totalCost: 0,
    creditCard: 0})

  private UserInforOrder$ : Observable<OrderPlacement> =this.UserInfoOrder.asObservable()


      public setOrder(order: OrderPlacement){
        this.UserInfoOrder.next(order)
      }





  async createOrderInf (feedId: any, dishName:any, totalCost: any, payment: OrderPlacement ){
      await this.createOrderInf(feedId, dishName, totalCost, payment)


  }

  async createFeedId( payment: OrderPlacement ){

    let completeInfoUser = new Object()

    let dishName: any[] = []
    let dish= JSON.parse(localStorage.getItem('arrayDishes') || '{}');
    dishName.push(dish)

    let totalCost = JSON.parse(localStorage.getItem('myData') || '{}')

     this.addToLocalStorageInfoUser(payment).subscribe(
      res => {

          completeInfoUser = {
                  
                  feedId: Object.values(res)[0],
                  dishName : dishName,
                  totalCost: totalCost,
                  //creditcard: OrderPlacement.creditCard

          }

      }
    )
    
    



  }

   // info de costo total
  public setData(data: any){
    const jsonData = JSON.stringify(data)
    localStorage.setItem('myData', jsonData)
    JSON.parse(localStorage.getItem('myData') || '{}')
    console.log( 'datos', data)
  }


  // obtener info de usuario desde post
  public addToLocalStorageInfoUser(dataSTorage: any){
    localStorage.setItem( 'completeInfo', JSON.stringify(this.UserInfoOrder))

    return this.paymentS.userPayment(dataSTorage)

  }



}
