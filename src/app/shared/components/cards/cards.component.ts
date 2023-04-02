import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfComponent } from '../dialog-conf/dialog-conf.component';
import { DialogPlaceOrderComponent } from 'src/app/core/modules/homepage/dialog/dialog-place-order/dialog-place-order.component';
import { FoodList } from '../../models/foodlist.model';
import { HttpService } from 'src/app/core/services/http/http.service';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';
import { IfStmt } from '@angular/compiler';






@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  

  FoodList : FoodList[] = []
  
  public searchRestaurant:string = ''
  dialogRef: any;


  constructor( public dialog: MatDialog,  private FList: HttpService, private dialogService: DialogueServiceService) {}
      


       openDialogConfirm( food: FoodList){

        this.dialog.open(DialogConfComponent, {
          width: '450px',
          height: '500px',
          disableClose: true,
          data: {
            
             description: food.description,
             dishName:   food.dishName,
             restaurant : food.restaurant,
             imageUrl :   food.imageUrl,
             cost  :      food.cost,
             id :         food.id,
          
          }
        }).afterClosed().subscribe ( (data: { dishName: string; cost: number; }) =>{

            {if (data){
             console.log (food.dishName == data.dishName)
            console.log (food.cost == data.cost)
           }}

        })
      
     }
            
           

      openDialogTrackOrder(){
        this.dialog.open(DialogPlaceOrderComponent,{
            width: '450px',
            height: '500px',
            disableClose: true,
          data: {
            dataKey: []
          }
        

        })      

        
        }


        public ngOnInit(): void {

            

              this.FList.getFoodList().subscribe( ( res: FoodList[] )=> 
              { this.FoodList = res})

            }




            }



        
           
            

          
          
                
              
              

      

        

        

        

      

      
     

function openDialogConfirm(FoodList: any) {
  throw new Error('Function not implemented.');
}

function openDialogTrackOrder() {
  throw new Error('Function not implemented.');
}

