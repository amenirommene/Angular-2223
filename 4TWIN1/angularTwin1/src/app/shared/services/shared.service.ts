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
    
}
