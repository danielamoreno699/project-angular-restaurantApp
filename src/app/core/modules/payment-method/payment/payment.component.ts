
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { payment  } from 'src/app/shared/models/user.models';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular-material-components/moment-adapter';
import {  MomentDateAdapter } from "@angular/material-moment-adapter";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {default as _rollupMoment, Moment} from 'moment';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import moment from 'moment';
import { PaymentServiceService } from 'src/app/core/services/payment-service/payment-service.service';
import { UserPaymentService } from 'src/app/core/services/user-payment/user-payment.service';
import { Subscription } from 'rxjs';
import { OrderPlacement } from 'src/app/shared/models/orderPlace';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
  
  },
};



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [
        {provide: DateAdapter, 
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },

        {provide : MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class PaymentComponent implements OnInit {

  public error: boolean;
  public dishname: string[];
  public subscription$ : Subscription | undefined
  public finalCost : number;
  public myForm : FormGroup;
  public payment : payment;

  public loading : boolean ;

  public submitted:  boolean;

 

 date = new FormControl(moment());



  constructor(private formBuilder: FormBuilder, private router : Router, private payments: PaymentServiceService, private userPaymentS: UserPaymentService, private dialogs: DialogueServiceService  ) {

    this.error = false

    this.dishname = []

    this.finalCost= 0

    this.payment = {} as payment;

    this.myForm = {} as FormGroup;


   



    this.loading = false;
    
    this.submitted = false 
 }

  ngOnInit(): void {

    this.initializePayment()
    
  }

  public initializePayment(): void {

    this.myForm = new FormGroup({
          namePayment: new FormControl('' , Validators.required),
          creditCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)]),
          cvv: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(3), Validators.maxLength(3) ]),
          date: new FormControl (moment())

    })
     
  }

  public setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>){
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();

  }

  public  getRandomArbitrary(): number {
    return Math.trunc(Math.random() * (600 - 100) + 100);
  }

  public onSubmit(){

    console.log("onsubmit")

    this.submitted = true 
    this.dialogs.arrayD.subscribe((dish: string[]) => this.dishname = dish)

  


    const info :  OrderPlacement ={

      feedId: this.getRandomArbitrary(),
      dishName:  this.dishname,
      totalCost: 0,
      creditCard: this.myForm.value.creditCard
     

  }


    console.log('feed', info.feedId)

      this.dialogs.setFeedId(info.feedId)
      this.dialogs.setcreditNumber(info.creditCard)
  
       this.userPaymentS.setOrder(info)
       console.log("order", info)

   
    
    

    this.payments.userPayment(this.myForm.value).subscribe ( data => {
        this.router.navigate(['/place-order'])
    
     
        console.log( "dataPayment", data)


    })

  
 

  }




  get userFormControls(){
    return this.myForm.controls;
  }

  public totalCost(cost: number){
    //this.userPaymentS.setData(cost).subscribe( (data: number) => {this.finalCost = data})
    
  }
 




}
