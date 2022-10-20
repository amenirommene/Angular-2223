import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SildeComponent } from '../silde/silde.component';
import { ContentComponent } from '../content/content.component';
import { ListuserComponent } from '../listuser/listuser.component';
import { UsersComponent } from '../users/users.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
   SildeComponent,
   ContentComponent,
    ListuserComponent,
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent,

  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
