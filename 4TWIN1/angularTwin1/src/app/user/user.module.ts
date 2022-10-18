import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from '../user/user.component';
import { SliderComponent } from '../slider/slider.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ListAccountComponent } from '../list-account/list-account.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserForm2Component } from './user-form2/user-form2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SliderComponent, 
    UserListComponent,
    UserComponent, 
    ListAccountComponent,
    UserDetailsComponent,
    UserFormComponent,
    UserForm2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
