import { SubadminRegistrationComponent } from './Admin/subadmin-registration/subadmin-registration.component';
import { AddTrackerComponent } from './Subadmin/add-tracker/add-tracker.component';
import { AddUsersComponent } from './Subadmin/add-users/add-users.component';
import { TrackersListComponent } from './Subadmin/trackers-list/trackers-list.component';
import { VerifyCodeComponent } from './Trackers/verify-code/verify-code.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubadminListComponent } from './Admin/subadmin-list/subadmin-list.component';


const routes: Routes = [
  { path: '', component: SubadminListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }