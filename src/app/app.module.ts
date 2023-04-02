import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from './core/modules/authentication/authentication.module';
import { HomepageModule } from './core/modules/homepage/homepage.module';
import { SettingsModule } from './core/modules/settings/settings.module';

import { PaymentMethodModule } from './core/modules/payment-method/payment-method.module';

import { SharedModule } from './shared/shared.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardsComponent } from './shared/components/cards/cards.component';






@NgModule({
  declarations: [
    AppComponent,
   
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HomepageModule,
    SettingsModule,
    PaymentMethodModule,

    MatDialogModule,
    

    BrowserAnimationsModule,

    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,

    MatSliderModule,
    
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,

    SharedModule,
    HttpClientModule,

    FormsModule,
    CommonModule,

    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule


    
  
  ],

  entryComponents : [ CardsComponent],

  

  providers: [  ],
  bootstrap: [AppComponent]
  
 
})
export class AppModule { }
