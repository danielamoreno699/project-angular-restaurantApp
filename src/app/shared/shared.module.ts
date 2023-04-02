import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { SharedRoutingModule } from './shared-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


import { CardsComponent } from './components/cards/cards.component';
import { FlexModule } from '@angular/flex-layout';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';


import { PipeFilterPipe } from './pipes/pipe-filter.pipe';
import { DialogConfComponent } from './components/dialog-conf/dialog-conf.component';
import { CartOrder2Component } from './components/cart-order2/cart-order2.component';
import { CartReview2Component } from './components/cart-review2/cart-review2.component';
import { MustMatchDirective } from './directives/must-match/must-match.directive';
import { DisablingFormDirective } from './directives/user-profile/disabling-form.directive';
import { HideDirective } from './directives/hide/hide.directive';
import { DialogTrackOrderComponent } from './components/dialog-tracking-order/dialog-track-order/dialog-track-order.component';
import { DialogSeePaymentComponent } from './components/dialog-tracking-order/dialog-see-payment/dialog-see-payment.component';







@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  
   
    CardsComponent,
  
  
       PipeFilterPipe,
       DialogConfComponent,
       CartOrder2Component,
       CartReview2Component,
       MustMatchDirective,
       DisablingFormDirective,
       HideDirective,
       DialogTrackOrderComponent,
       DialogSeePaymentComponent,


 
  
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexModule,
    
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule

   
   
    
 
  ],

  exports :[
      NavbarComponent,
      FooterComponent,
      CardsComponent,
      PipeFilterPipe,
      DialogConfComponent,
      CartOrder2Component,
      CartReview2Component,
      DisablingFormDirective,

     
      

      

  ]

  

})
export class SharedModule { }
