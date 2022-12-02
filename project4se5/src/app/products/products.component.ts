import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 // providers : [ProductService] 
 //ProductService n'est disponible que pour ce composant
})
export class ProductsComponent implements OnInit {
  title : string = "Test1";
  price: number = 100;
  listProduct :  Product[];
    constructor(private ps:ProductService) //injection des services
  {  console.log("constructor"); }

  buy(p:Product){
    if (p.quantity > 0){
   p.quantity = p.quantity - 1;
    }
  }
  like(p:Product){
    p.like = p.like + 1;
  }
  ngOnInit(): void {//méthode hook
    console.log("ngOninit");
    /* this.listProduct=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  */
    //  this.listProduct=this.ps.getAllProducts();
    this.ps.getAllProductsFromDb().
    subscribe(res=>this.listProduct=res);
  }

}
