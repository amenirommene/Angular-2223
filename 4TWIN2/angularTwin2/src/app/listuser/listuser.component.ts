import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  @Input() categorie : string="";
  sourceImage : string = '../assets/images/admin.png';
  nb2 : number = 8;
  nb : number = 5;
  list : User[]=[];
  setNb(newval){
    this.nb = newval;
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }
  getUsersByCategorie(cat:string){
    console.log(cat);
   this.us.getUsersByAccountCategory(cat).subscribe(res=>{this.list=res; console.log(res)});
  }
  //ce n'est pas une méthode hook
  constructor(private us:UserService) { 
    console.log ("je suis le constructor");
  } //création de l'objet + injection de dépendances 

  delete(pos:number){
  console.log(this.list);
  // console.log(this.list.splice(pos,1));
  this.us.deleteUser(this.list[pos]).subscribe(()=>this.us.getAllUsersFromDb().subscribe(res=>this.list=res));
   console.log(this.list);

  }

  getAllUsers(){
    console.log("getAllUsers()");
    this.us.getAllUsersFromDb().subscribe(res=>
      { this.list=res, 
        console.log(this.list), 
        console.log(this.us.fetchNbInList(this.list,"firstName", "Robert"))
      });
  }
  ngOnInit(): void { //méthode hook qui permet d'initiliser les propriétés 
  console.log ("je suis ngOnInit()");
  //this.list=this.us.getAllUsers();
  this.getAllUsers();
 // console.log(this.list);
 // console.log(this.us.fetchNbInList(this.list,"firstName", "Robert"));
  }


 f(){
  this.sourceImage='../assets/images/customer.png';
 }
}
