import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTestComponent } from './my-test/my-test.component';
import { VerifyCodeComponent } from './Trackers/verify-code/verify-code.component';
import { ComplaintCodeComponent } from './Trackers/complaint-code/complaint-code.component';
import { UsersListComponent } from './Subadmin/users-list/users-list.component';
import { ComplaintCodeListComponent } from './Subadmin/complaint-code-list/complaint-code-list.component';
import { SubadminRegistrationComponent } from './Admin/subadmin-registration/subadmin-registration.component';
import { SubadminListComponent } from './Admin/subadmin-list/subadmin-list.component';
import { AddUsersComponent } from './Subadmin/add-users/add-users.component';
import { AddTrackerComponent } from './Subadmin/add-tracker/add-tracker.component';
import { TrackersListComponent } from './Subadmin/trackers-list/trackers-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    VerifyCodeComponent,
    ComplaintCodeComponent,
    UsersListComponent,
    ComplaintCodeListComponent,
    SubadminRegistrationComponent,
    SubadminListComponent,
    AddUsersComponent,
    AddTrackerComponent,
    TrackersListComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
