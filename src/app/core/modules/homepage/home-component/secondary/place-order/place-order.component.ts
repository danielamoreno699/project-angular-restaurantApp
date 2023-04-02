import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DialogTrackOrderComponent } from 'src/app/shared/components/dialog-tracking-order/dialog-track-order/dialog-track-order.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderPlacement } from 'src/app/shared/models/orderPlace';
import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  public feedId: number

  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "In Progress"

  constructor(public dialog: MatDialog, public dialogs: DialogueServiceService ) { 
    this.feedId = 0
  }

  ngOnInit(): void {
    this.dialogs.feedId$.subscribe((feedId: number) => this.feedId  = feedId)
  }

  openDialogTrackOrder(){
    this.dialog.open(DialogTrackOrderComponent,{
        width: '300px',
        height: '300px',
        disableClose: true,

      data: {

        
      

      }
    

  })      

    
    }

}
