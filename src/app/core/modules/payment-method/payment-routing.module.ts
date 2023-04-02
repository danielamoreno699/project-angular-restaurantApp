import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmOrderComponent } from '../homepage/home-component/secondary/confirm-order/confirm-order.component';

import { RouterModule, Routes } from '@angular/router';

const PaymentRoutes: Routes = [
    
        {path: 'payment-component', component: PaymentComponent},
        

]


@NgModule({
    imports: [RouterModule.forChild(PaymentRoutes)],
    exports: [RouterModule]
  })
  export class PaymentRoutingModule { }