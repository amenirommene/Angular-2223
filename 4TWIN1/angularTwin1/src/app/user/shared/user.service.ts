import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { UserModule } from '../user.module';

@Injectable()
export class UserService {

  urlUsers : string = "http://localhost:3000/users";
  constructor(private _http:HttpClient) { 
    console.log("je suis shared service");
  }
  deleteUser(id:number){
    return this._http.delete(this.urlUsers+"/"+id)
  }
  addUser(u:User):Observable<User>{
    return this._http.post<User>(this.urlUsers,u);
  }
  getAllUsersFromDB(): Observable<User[]>{
  return this._http.get<User[]>(this.urlUsers);
  }

  getUser(id:number):Observable<User>{
    return this._http.get<User>(this.urlUsers+'/'+id);
  }
  updateUser(user:User){
    return this._http.put(this.urlUsers+"/"+user.id,user);
  }
  getAllUsers():User[]{
    return [ 
      { 
      id: 1, 
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
      id: 2, 
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
      id: 3, 
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
      id: 4, 
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
      id: 5, 
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
