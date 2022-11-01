import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  urlUsers : string = "http://localhost:3000/users";
  constructor(private _http:HttpClient) { 
    console.log("je suis shared service");
  }

  fetchNbInList(list: any, attribute:string, attributeVal: string){
    let nb = 0;
    for (let i of list){
      if (i[attribute] === attributeVal){
        nb = nb+1;
      }
    }
    return nb;
  }

  getAllUsersFromDB(): Observable<User[]>{
  return this._http.get<User[]>(this.urlUsers);
  }
  getAllUsers():User[]{
    return [ 
      { 
      idCustomer: 1, 
      firstName: "MilaTWIN1", 
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
      ]
     


  }
}
