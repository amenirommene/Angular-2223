import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users : User[];
  constructor() { }
   f(){
    alert("Bonjour");
   }
  ngOnInit(): void {
    this.users=[
      { id:1, email:"foulen1@esprit.tn"},
      { id:2, email:"foulen2@esprit.tn"}
    ]
  }

}
