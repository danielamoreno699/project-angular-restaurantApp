import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationRoutingModule} from './core/modules/authentication/authentication-routing.module';
import { HomePageRoutingModule} from './core/modules/homepage/homepage-routing.module';
import { SettingsRoutingModule } from './core/modules/settings/settings-routing.module';
import { PaymentRoutingModule } from './core/modules/payment-method/payment-routing.module';



const routes: Routes = []

  

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
    AuthenticationRoutingModule,
    HomePageRoutingModule,
    SettingsRoutingModule,
    PaymentRoutingModule

  ], 


  exports: [RouterModule]


})
export class AppRoutingModule { }
