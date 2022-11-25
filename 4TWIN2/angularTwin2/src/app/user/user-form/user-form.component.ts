import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers:[]
})
export class UserFormComponent implements OnInit {
  nb : number = 5;
  list : User[]=[];
  user : User = new User();
  @Output() notified = new EventEmitter<any>();
  constructor() { 
    console.log("constructor : user form");
  }

  ngOnInit(): void {
  }
   test(){
    console.log("test variable référence");
   }
  addUser(f){
    let obj = {"user":this.user, "msg":"succès"};
    this.notified.emit(obj);

    console.log(f);/*
    this.list.push(this.user);
    console.log(this.list);*/
    this.user=new User();//vider le formulaire
  }

}
