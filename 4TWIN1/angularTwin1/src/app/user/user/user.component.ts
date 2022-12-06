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
  show2:boolean=false;
  constructor(private us:UserService) { }
  getUsers(acc){
    console.log("usercomponent"+acc);
   this.userListChild.getUsersByAccount(acc);
  }
  showForm2(){
    this.show2=true;
  }
  showForm(){
    this.show=true;
  }
  addUser(obj:any){
    console.log(obj);
    console.log(obj.user);
    console.log(obj.msg);
    this.us.addUser(obj.user).subscribe(()=>this.userListChild.getAllUsers());
    

  }
  ngOnInit(): void {
   
  }

}
