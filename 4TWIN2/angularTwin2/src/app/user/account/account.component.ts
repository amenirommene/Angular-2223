import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() image : string;
  @Input() title : string;
  @Input() description:string;
  @Output() deleted = new EventEmitter();
  @Output() notified1 = new EventEmitter();
  ngOnChanges(changes:SimpleChanges){
console.log(changes);
  }
  ngAfterViewInit(){
    console.log("je suis ngAfterViewInit ")
  }
  showUsers(){
this.notified1.emit();
  }
  constructor() { }
  deleteMe(){
  this.deleted.emit();
  }
  ngOnInit(): void {
  }

}
