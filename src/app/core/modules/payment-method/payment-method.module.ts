import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentComponent } from './payment/payment.component';


import { PaymentRoutingModule } from './payment-routing.module';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    PaymentComponent,
  
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  
    MatSidenavModule,
    MatDividerModule,
    PaymentRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,

    FormsModule,
    ReactiveFormsModule
  

   
  ],

  exports:[
    PaymentComponent
  ]
})
export class PaymentMethodModule { }
