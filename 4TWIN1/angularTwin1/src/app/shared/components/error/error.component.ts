import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() errors ;
  message : string = "";
  constructor() { }

  ngOnInit(): void {
    console.log("je suis ngOnInit");
  }
//une méthode hook : se déclenche à chaque changement de Input property
//on l'appelle une fois on veut faire un traitement à chaque changement
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    console.log("je suis ngOnChanges");
  if (this.errors?.['required']){
      this.message="Champ obligatoire";
    }
    if (this.errors?.['minlength']){
      this.message +="Min Length";
    }

    console.log(this.errors);
  }

}
