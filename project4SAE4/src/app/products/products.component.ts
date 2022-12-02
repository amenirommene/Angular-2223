import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  price: number = 1000;
  title :string = "test2";
  title2 :string = "testNgmodel";
  nb : number;
  listProducts: Product[];
  constructor(private ps:ProductService) { } //injection des services
 
  f(newval:string){
    this.title=newval
  }
  ngOnInit(): void { //méthode hook, initiliser les propriété
   // this.listProducts=this.ps.getProducts();
   this.ps.getAllProducts().
   subscribe(res=>this.listProducts=res);
  }
  getNbProducts(){
    this.nb=this.ps.
    getNumberOf(this.listProducts,"title","T-shirt1")
  }
  addLike(p:Product){
    p.like+=1;
  }
  buyProduct(i:number){
    this.listProducts[i].quantity -=1;
  }

}
