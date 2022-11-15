import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  myForm :  FormGroup;
  @Output() aded = new EventEmitter<any>();
  constructor() { }
  save(){
    let user = new User();
    user.accountCategory=this.myForm.get('categorie').value;
    user.password=this.myForm.get('password').value;
    user.firstName=this.myForm.controls['autres'].get('firstName').value;
    user.lastName=this.myForm.controls['autres'].get('lastName').value;
    user.email=this.myForm.controls['autres'].get('email').value;
    //user.lastName=this.myForm.controls['autres'].get('lastName').value;
   this.aded.emit({"user":user,"msg":"Success"});
   this.myForm.reset();
  }
  
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
