import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ZipsComponent } from './components/zips/zips.component';

const routes: Routes = [ {
  path:'home',
  component:HomeComponent
},
{
  path:'zips',
  component:ZipsComponent
},
{
  path:"ticket",
  component:TicketComponent
},
{
  path:"ticket-list",
component:TicketListComponent
},
{
  path:"create",
component:CreateUserComponent
},
{
  path:"users/:role",
component:UserListComponent
},
{
  path:"editUser/:id/:role",
component:CreateUserComponent
},
{
  path:"login",
component:LoginComponent
},
{
  path:"viewTicket/:id",
component:TicketComponent
},
{
  path:"feedback/:ticketId",
 component:FeedbackComponent
},
{
  path:'**',
redirectTo:'/login',
pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
