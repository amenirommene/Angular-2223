import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from '../user/user/user.component';
import { SliderComponent } from './slider/slider.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import { UserService } from './shared/user.service';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    SliderComponent, 
    UserListComponent,
    UserComponent, 
    ListAccountComponent,
    UserDetailsComponent,
    UserFormComponent,
    UserReactiveFormComponent,
    UserComponent,
    AccountComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
   UserService
  ]
})
export class UserModule { }
