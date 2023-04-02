import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription : Subscription;
  message: any

  constructor( private alertS: AlertService ) {
    this.subscription = this.alertS.getAlert()
    .subscribe(message =>{ 
      switch(message && message.type){
        case 'success': message.cssClass = 'alert alert-success'

        break;

        case 'error':
          message.cssClass = 'alert alert-danger';
        
        break
      }

      this.message = message
    })
   }

  ngOnInit(): void {
    this.subscription 
     
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
