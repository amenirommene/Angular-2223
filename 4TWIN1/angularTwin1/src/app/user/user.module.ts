import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from '../user/user.component';
import { SliderComponent } from '../slider/slider.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ListAccountComponent } from '../list-account/list-account.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


@NgModule({
  declarations: [
    SliderComponent, 
    UserListComponent,
    UserComponent, 
    ListAccountComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
