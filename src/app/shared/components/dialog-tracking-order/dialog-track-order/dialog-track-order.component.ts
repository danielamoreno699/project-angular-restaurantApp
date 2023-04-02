import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';
import { OrderPlacement } from 'src/app/shared/models/orderPlace';


@Component({
  selector: 'app-dialog-track-order',
  templateUrl: './dialog-track-order.component.html',
  styleUrls: ['./dialog-track-order.component.css']
})
export class DialogTrackOrderComponent implements OnInit {

 public info: OrderPlacement ={
  feedId: 0,
  dishName:  [],
  totalCost: 0,
  creditCard: 0
 


}
   


  
 

  constructor(public dialogRef: MatDialogRef<DialogTrackOrderComponent>, private dialogs: DialogueServiceService) {
 
    
   }

  ngOnInit(): void {

    this.dialogs.arrayD.subscribe((dish: string[]) => this.info.dishName  = dish)
    this.dialogs.feedId$.subscribe((feedId: number) => this.info.feedId  = feedId)
    this.dialogs.totalNumber$.subscribe((total: number) => this.info.totalCost  = total)
    this.dialogs.creditCard$.subscribe((creditCard: number ) => this.info.creditCard = creditCard)



   
}

  closeDialogP(){
    this.dialogRef.close();
  }

}
