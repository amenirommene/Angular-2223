import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-reacttive-form',
  templateUrl: './user-reacttive-form.component.html',
  styleUrls: ['./user-reacttive-form.component.css']
})
export class UserReacttiveFormComponent implements OnInit {

  myForm:FormGroup;
  list : User[]=[];
  user : User = new User();
  constructor() { }

  ngOnInit(): void {
    let myUser=new User();
    this.myForm=new FormGroup({
      autres:new FormGroup({
      birthDate:new FormControl(myUser.firstName, Validators.required),
      email:new FormControl('', Validators.required),
      firstName:new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      last:new FormControl('last')
    }),
      profession:new FormControl(''),
      accountCategory:new FormControl(''),
    })
  }

  get firstN(){
    return this.myForm.controls['autres'].get('firstName');
  }

  get myControls(){
    return this.myForm.controls['autres'];
  }

  addUser(){
    this.user.firstName=  this.myForm.controls['autres'].get('firstName').value;
    this.user.lastName=  this.myForm.controls['autres'].get('last').value;
    this.user.email=  this.myForm.controls['autres'].get('email').value;
    this.user.birthDate=  this.myForm.controls['autres'].get('birthDate').value;
    this.user.profession=  this.myForm.get('profession').value;
    this.user.accountCategory=  this.myForm.get('accountCategory').value;
  this.list.push(this.user);
  console.log(this.list);
  this.myForm.reset();
  }
}
