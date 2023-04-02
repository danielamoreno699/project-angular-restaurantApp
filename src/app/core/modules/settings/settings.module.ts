import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    ViewProfileComponent,
   
    

  ],
   
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    
    ReactiveFormsModule

  
    
  ],

exports:[
  UserProfileComponent,
  ViewProfileComponent,
 
  

],





})
export class SettingsModule { }
