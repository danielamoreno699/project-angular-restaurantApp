import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import {MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { FormsModule } from '@angular/forms';


import { HomeComponentComponent } from './home-component/home-component.component';


import { HomePageRoutingModule } from './homepage-routing.module';




import { DialogPlaceOrderComponent } from './dialog/dialog-place-order/dialog-place-order.component';
import { ConfirmOrderComponent } from './home-component/secondary/confirm-order/confirm-order.component';
import { PlaceOrderComponent } from './home-component/secondary/place-order/place-order.component';











@NgModule({
  declarations: [
    HomeComponentComponent,

   
   
   
    DialogPlaceOrderComponent,
    ConfirmOrderComponent,
    PlaceOrderComponent,
    
   
  
    
    


  ],
  imports: [
    
    HomePageRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule
  
   
   
   
  ],

  exports: [
      HomeComponentComponent,
    
      ConfirmOrderComponent,
      PlaceOrderComponent,
      
      
      
      
      
      


  ]





})
export class HomepageModule { }
