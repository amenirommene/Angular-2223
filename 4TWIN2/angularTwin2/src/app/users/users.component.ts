import { Component, OnInit, ViewChild } from '@angular/core';
import { ListuserComponent } from '../listuser/listuser.component';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 // addform : string="test" ;
  @ViewChild(ListuserComponent) 
 private myChild : ListuserComponent;
  constructor(private us:UserService) { }
categorie : string = "";
getUsers(cat:string){
  let categorie = cat.substring(0,cat.indexOf(" "));
  console.log(cat.substring(0,cat.indexOf(" ")));
this.myChild.getUsersByCategorie(categorie);
}  
ngOnInit(): void {
  }

  addUser(u:any){
    alert (u.msg);
    this.us.addUser(u.user).subscribe(()=>this.myChild.getAllUsers());
  }

}
