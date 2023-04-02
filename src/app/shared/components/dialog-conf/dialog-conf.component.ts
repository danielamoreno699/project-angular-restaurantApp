import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input,  Inject, } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { find, map, Observable, subscribeOn } from 'rxjs';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';
import { FoodList } from 'src/app/shared/models/foodlist.model';
import { CardsComponent } from '../cards/cards.component';
import { CartOrder2Component } from '../cart-order2/cart-order2.component';
import { Menu } from '../../models/menu.model';






@Component({
  selector: 'app-dialog-conf',
  templateUrl: './dialog-conf.component.html',
  styleUrls: ['./dialog-conf.component.css']
})
export class DialogConfComponent  {


      private menu: Menu[]= []
  

  count: number = 0;

  
  local_data:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: FoodList, private dialogRef : MatDialogRef<CardsComponent> , private dialogs : DialogueServiceService) {

      //console.log(data);
    //this.local_data = {...data};
    

  } 

  
  public inCount(): void{
        this.count ++                

  }

  public resetCounter(): void {
          this.count = 0
  }

  public closeDialog(){
        
            this.updateCart();
            this.storingData(this.data.dishName, this.data.cost, this.count);
           
            this.dialogRef.close();
            
        }


public updateCart(){
            this.dialogs.setCost(this.data.cost);
            this.dialogs.setDishName(this.data.dishName);
            this.dialogs.setCount(this.count);
           
}


public storingData(dishName: string, cost: number, count: number){

      const StoreData = {
            'dishName' : dishName,
            'count': count,
            'cost' : cost
      };

       this.dialogs.addToLocalStorage(StoreData);
      
       let y = StoreData.cost * StoreData.count
      this.dialogs.addCostToLS(y)

      let z = StoreData.dishName
      this.dialogs.arrayDsh(z)

      console.log("dish", z)

      //console.log( 'cost', y)


}



}