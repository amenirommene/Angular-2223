import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  list : User[]=[];
  user : User = new User();
  accountCategory:string="Customer";
  test(err){
    this.user.accountCategory="Customer";
   this.list.push(this.user);
   console.log(this.list);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
