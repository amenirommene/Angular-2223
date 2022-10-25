import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  myForm :  FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      autres : new FormGroup({
      email:new FormControl('',Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")),
      firstName : new FormControl('',[Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      }),
        categorie:new FormControl(),
        password:new FormControl()
      })
    
  }

  test(){
    console.log(this.myForm);
  }

  get FirstName(){

  // console.log (this.myForm.controls['autres.firstName']);
   return this.myForm.controls['autres'].get('firstName');
  }

}
