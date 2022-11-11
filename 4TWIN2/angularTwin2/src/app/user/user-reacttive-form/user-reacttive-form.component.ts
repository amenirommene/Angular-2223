import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-reacttive-form',
  templateUrl: './user-reacttive-form.component.html',
  styleUrls: ['./user-reacttive-form.component.css']
})
export class UserReacttiveFormComponent implements OnInit {
  id: number;
  myForm:FormGroup;
  list : User[]=[];
  user : User = new User();
  constructor(private us:UserService, private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.ac.paramMap.subscribe(params=>{
      this.id=+params.get('id'); 
      if (this.id){
        //update
        this.us.getUser(this.id).subscribe(
          res=>{
           this.user=res, 
           this.createForm(this.user)}
           )

      }else{
          this.createForm(new User());
      }}
      )}
      
    
      
    
   // let myUser=new User();
   
   createForm(user){
    this.myForm=new FormGroup({
      autres:new FormGroup({
      birthDate:new FormControl(user.birthDate, Validators.required),
      email:new FormControl(user.email, Validators.required),
      firstName:new FormControl(user.firstName,[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      last:new FormControl(user.lastName)
    }),
      profession:new FormControl(user.profession),
      accountCategory:new FormControl(user.accountCategory),
    })
  }
   
  
  get firstN(){
    return this.myForm.controls['autres'].get('firstName');
  }

  get myControls(){
    return this.myForm.controls['autres'];
  }

  saveUser(){
    this.user.firstName=  this.myForm.controls['autres'].get('firstName').value;
    this.user.lastName=  this.myForm.controls['autres'].get('last').value;
    this.user.email=  this.myForm.controls['autres'].get('email').value;
    this.user.birthDate=  this.myForm.controls['autres'].get('birthDate').value;
    this.user.profession=  this.myForm.get('profession').value;
    this.user.accountCategory=  this.myForm.get('accountCategory').value;
  //this.list.push(this.user);
 // console.log(this.list);
 //this.user.idCustomer=100;
 //this.user.password="";
 //this.user.picture="";
 if (this.id){
  this.us.updateUser(this.user).subscribe();
 }else{
  this.us.addUser(this.user).subscribe();
 }

  this.myForm.reset();
  }
}
