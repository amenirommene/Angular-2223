import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { SharedService } from '../../shared/services/shared.service';
import { UserService } from '../shared/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   @ViewChild(UserListComponent) private userListChild : UserListComponent;
  show:boolean=false;
  constructor(private us:UserService) { }
  showForm(){
    this.show=true;
  }
  addUser(obj:any){
    console.log(obj);
    console.log(obj.user);
    console.log(obj.msg);
    this.us.addUser(obj.user).subscribe(()=>this.userListChild.ngOnInit());
    

  }
  ngOnInit(): void {
   
  }

}
