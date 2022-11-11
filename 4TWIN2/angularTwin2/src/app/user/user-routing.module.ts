import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UsersComponent } from '../users/users.component';
import { UserReacttiveFormComponent } from './user-reacttive-form/user-reacttive-form.component';

const routes: Routes = [
   {path:'', component:UsersComponent, children:[
    {path:'user-details/:id', component:UserDetailsComponent}
  ]},
  {path:'user-update/:id', component:UserReacttiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
