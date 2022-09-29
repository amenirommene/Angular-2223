import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  sourceImage : string = '../assets/images/admin.png';
  nb2 : number = 8;
  nb : number = 5;
  list : User[];
  setNb(newval){
    this.nb = newval;
  }
  //ce n'est pas une méthode hook
  constructor() { 
    console.log ("je suis le constructor");
  } //création de l'objet + injection de dépendances 

  delete(pos:number){
  console.log(this.list);
   console.log(this.list.splice(pos,1));
   console.log(this.list);

  }
  ngOnInit(): void { //méthode hook qui permet d'initiliser les propriétés 
  console.log ("je suis ngOnInit()");
  this.list=[
    {
    idCustomer: 1,
    firstName: "Mila",
    lastName: " Kunis",
    birthDate: "1999-06-30",
    accountCategory: "Admin",
    email: "mila@kunis.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 2,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 3,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 4,
    firstName: "Ryan",
    lastName: "Gossling",
    birthDate:"1999-06-30",
    accountCategory: "Golden",
    email: "Ryan@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 5,
    firstName: "Robert",
    lastName: "Downey",
    birthDate: "1999-06-30",
    accountCategory: "Blocked Account",
    email: "robert@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
    profession: "Software Engineer"
    }
    ];
  }


 f(){
  this.sourceImage='../assets/images/customer.png';
 }
}
