import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SildeComponent } from '../silde/silde.component';
import { ContentComponent } from '../content/content.component';
import { ListuserComponent } from '../listuser/listuser.component';
import { UsersComponent } from '../users/users.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserReacttiveFormComponent } from './user-reacttive-form/user-reacttive-form.component';
import { UserService } from '../shared/user.service';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
   SildeComponent,
   ContentComponent,
    ListuserComponent,
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent,
    UserReacttiveFormComponent,
    AccountComponent,

  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UserService]
})
export class UserModule { }
