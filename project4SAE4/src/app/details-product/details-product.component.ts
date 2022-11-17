import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  idFromUrl : number;
  constructor(private ac:ActivatedRoute ) { }

  ngOnInit(): void {
    this.idFromUrl=this.ac.snapshot.params['id'];
    console.log(this.idFromUrl);
  }

}
