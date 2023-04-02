import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';





const  settingRoutes: Routes = [
            { path : 'user-profile', component: UserProfileComponent},
            { path : 'view-profile', component : ViewProfileComponent }

      ]
    




  

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

