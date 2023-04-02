import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';
import { UserPaymentService } from 'src/app/core/services/user-payment/user-payment.service';


@Component({
  selector: 'app-cart-review2',
  templateUrl: './cart-review2.component.html',
  styleUrls: ['./cart-review2.component.css']
})
export class CartReview2Component implements OnInit {

  costTotal: number[] =[]

  totalTax: number[] = []

  randomNumber: number

  costNumber : number

  total: number




  constructor(private dialogs: DialogueServiceService, private route: Router, private userS: UserPaymentService) { 

    this.total = 0
    
    this.randomNumber = 60
    this.costNumber = 0
  }

  ngOnInit(): void {


   

    this.addCosts(this.costNumber)
    
   

    this.total = this.sumTotalwithoutTax()+ this.randomNumber


  
  }

  public sumTotalwithoutTax(){

    this.costTotal
    const sumWithoutTax = this.costTotal.reduce((prevValue, total1)=> prevValue + total1, 
    0

    );
    return sumWithoutTax

  }


  public addCosts(cost: number){
      const updateItems= [... this.costTotal];
       updateItems.push( cost);
       this.addCostsToCard()

     

        
     
      //console.log('total', this.costTotal)
     
  }


public addCostsToCard(){
  this.dialogs.costC.subscribe((costTotal$: any[])=> {this.costTotal = costTotal$})

}


public addTax(){

 this.dialogs.randomGenerator$.subscribe((tax : number)=> {this.randomNumber = tax})
  
}

public convertTaxToRandom(tax : number){
  this.addTax()
  let z = Math.floor((Math.random() * 50) + 1)
  tax = z
  return tax
}



public GoToPayment(){

  console.log("total")
  console.log("total2", this.total)
this.dialogs.setTotal(this.total)
  
this.route.navigate(['/payment-component']);
}





}

