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
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      firstName : new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern("[a-zA-Z]*")]),
      }),
        categorie:new FormControl('', [Validators.required,Validators.pattern("Customer")]),
        password:new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?")])
      })
    
  }

  test(){
    console.log(this.myForm);
  }

  get FirstName(){

  // console.log (this.myForm.controls['autres.firstName']);
   return this.myForm.controls['autres'].get('firstName');
  }
  get categorie(){

    // console.log (this.myForm.controls['autres.firstName']);
     return this.myForm.get('categorie');
    }

    get password(){

      // console.log (this.myForm.controls['autres.firstName']);
       return this.myForm.controls['password'];
      }

}
