import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-place-order',
  templateUrl: './dialog-place-order.component.html',
  styleUrls: ['./dialog-place-order.component.css']
})
export class DialogPlaceOrderComponent {

  constructor(public dialogRef: MatDialogRef<DialogPlaceOrderComponent>) { }

  closeDialogP(){
    this.dialogRef.close();
  }

 
}
