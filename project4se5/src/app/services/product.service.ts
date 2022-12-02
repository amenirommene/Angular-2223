import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({ //décorateur de classe 
  providedIn: 'root' //métadata
})
export class ProductService {
 productUrls : string = "http://localhost:3000/products";
  constructor(private myHttp : HttpClient) { }

  getAllProductsFromDb():Observable<Product[]>{
   return this.myHttp.get<Product[]>(this.productUrls);
  }
  getAllProducts(){
    return [
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  }
}
