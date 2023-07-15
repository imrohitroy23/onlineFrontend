import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { LoginComponent } from './components/login/login.component';
import { CoreComponent } from './components/core/core.component';

import { FeedbackComponent } from './components/feedback/feedback.component';
import { ZipsComponent } from './components/zips/zips.component';


const routes:Routes=[

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CreateUserComponent,
    UserListComponent,
    TicketComponent,
    TicketListComponent,
    LoginComponent,
    CoreComponent,

    FeedbackComponent,
     ZipsComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AppRoutingModule,FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
