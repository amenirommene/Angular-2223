import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:"", component:UserComponent, children:[
    {path:"user-details/:id", component:UserDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
