import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root' //une seule instance pour tous
})
export class ProductService {

  productsUrl = "http://localhost:3000/products";
  constructor(private myHttp:HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.myHttp.get<Product[]>(this.productsUrl);
  }
  getProducts(){
    let list : Product[]= [
      {id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt1", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  return list;
    }

    getNumberOf(list:any, critiria:string, value:any){
      let nb = 0;
       for (let p of list){
        if (p[critiria] == value){
          //console.log(p['critiria']);
          nb = nb+1;
        }
       }
      return nb;
    }
}
