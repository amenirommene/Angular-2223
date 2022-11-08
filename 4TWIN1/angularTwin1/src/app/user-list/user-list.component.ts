import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  categorie1 : string = "test1";
  categorie2 : string = "test2";
  list : User[]=[];
  constructor(private myservice:SharedService) { }

  ngOnInit(): void {
    //this.list=this.myservice.getAllUsers();
    this.myservice.getAllUsersFromDB().subscribe(data=>
      {this.list=data, console.log(this.list)}
      );
   // console.log(this.list);
            /*this.list = [ 
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
      ]*/
      
  }

  testValue(val){
    this.categorie1=val;
    console.log(this.categorie1);
  }

  delete(i:number){
   // this.list.splice(i,1);
   this.myservice.deleteUser(this.list[i].id).subscribe(()=>this.myservice.getAllUsersFromDB().subscribe(
    res=>this.list=res));


  }

}
