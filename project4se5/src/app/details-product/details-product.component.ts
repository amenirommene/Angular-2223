import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  //récupérer la valeur de l'id envoyé dans l'url
  //service prédéfini: ActivatedRoute
   idVal : number;
  //on injecte le service ActivatedRoute via le constructor
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    //récupérer la valeur du paramètre id 
    this.idVal=this.ac.snapshot.params['id'];
  }

}
