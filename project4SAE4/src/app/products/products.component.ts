import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  price: number = 1000;
  title :string = "test2";
  title2 :string = "testNgmodel";
  listProducts: Product[];
  constructor() { } //injection des services
 
  f(newval:string){
    this.title=newval
  }
  ngOnInit(): void { //méthode hook, initiliser les propriété
    this.listProducts=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }

  addLike(p:Product){
    p.like+=1;
  }
  buyProduct(i:number){
    this.listProducts[i].quantity -=1;
  }

}
