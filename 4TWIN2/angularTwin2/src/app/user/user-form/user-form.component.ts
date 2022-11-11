import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers:[]
})
export class UserFormComponent implements OnInit {

  list : User[]=[];
  user : User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  addUser(f){
    console.log(f);
    this.list.push(this.user);
    console.log(this.list);
    this.user=new User();
  }

}
