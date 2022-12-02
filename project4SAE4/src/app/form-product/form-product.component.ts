import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  list : Product[]=[];
  p:Product=new Product();
  constructor() { }
  addProduct(){
    this.list.push(this.p);
    console.log(this.list);
    this.p=new Product();
  }
  ngOnInit(): void {
  }

}
