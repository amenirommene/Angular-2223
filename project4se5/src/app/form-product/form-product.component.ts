import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  list : Product[]=[];
  p:Product = new Product();
  constructor(private ac:ActivatedRoute, 
    private ps:ProductService, 
    private _route:Router) { }

  ngOnInit(): void {
  let id = this.ac.snapshot.params['id'];
  this.ps.getProductById(id).subscribe(res=>
    this.p=res);

  }
  update(){
    this.ps.updateProduct(this.p).subscribe(
      ()=>this._route.navigateByUrl("/products"));
  }



  addProduct(){
    console.log(this.p);
   // this.list.push(this.p);
   this.p.price = 0;
   this.p.like = 0;
   this.p.quantity = 0;
    this.ps.addProduct(this.p).subscribe(()=>this._route.navigateByUrl("/products"));
    
    console.log(this.list);
    this.p=new Product();
    
  }

}
