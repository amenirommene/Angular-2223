import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input()nb:number;
  @Input() product : Product;
  @Output() clicked = new EventEmitter();
  @Output() liked = new EventEmitter<any>();
  like : number = 0;
  constructor() { }
  addLike(){
    this.product.like = Number(this.product.like) + Number(this.like);
   this.liked.emit({"msg":"succès","product":this.product});
  }
  ngOnInit(): void {
  }
  sendNotif(){
    this.clicked.emit();
  }

}
