import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  list : Product[]=[];
  p:Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.p);
    this.list.push(this.p);
    console.log(this.list);
    this.p=new Product();
  }

}
