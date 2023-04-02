import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponentComponent } from './home-component/home-component.component';
import { ConfirmOrderComponent } from './home-component/secondary/confirm-order/confirm-order.component';

import { PlaceOrderComponent } from './home-component/secondary/place-order/place-order.component';










const HomePageRoutes: Routes = [

      {path: 'home-component', component: HomeComponentComponent },
      { path : 'confirm-order', component: ConfirmOrderComponent},
      { path : 'place-order', component: PlaceOrderComponent}

     
  
      
]

  

@NgModule({
  imports: [RouterModule.forChild(HomePageRoutes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
