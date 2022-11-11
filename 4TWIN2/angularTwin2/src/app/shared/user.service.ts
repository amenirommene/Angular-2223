import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserModule } from '../user/user.module';

@Injectable(
  //{providedIn: UserModule} //correcte si le module n'est pas lazy loaded
  )
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 userUrl="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  getAllUsers() : User[]{
    return [
      {
      id: 1,
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
      ];
  }

  fetchNbInList(list:any, attribute:string, valAttribute:string){
   let nb = 0;
    for (let u of list){
           if (u[attribute] == valAttribute){
                 nb = nb+1;
           }
   }
   return nb;
  }

  getAllUsersFromDb():Observable<User[]>{
    return this._http.get<User[]>(this.userUrl);
  }

  addUser(user:User):Observable<User>{
    console.log("service appelé");
    return this._http.post<User>(this.userUrl,user,this.httpOptions);
  }

  deleteUser(user:User):Observable<User>{
    console.log("delete user");
    return this._http.delete<User>(this.userUrl+"/"+user.id);
  }

  updateUser(user:User):Observable<User>{
    console.log("update user");
    return this._http.put<User>(this.userUrl+"/"+user.id,user);
  }

  getUser(id:number):Observable<User>{
    console.log("get user");
    return this._http.get<User>(this.userUrl+"/"+id);
  }

}
