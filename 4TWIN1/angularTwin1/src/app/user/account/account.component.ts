import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() image:string;
  @Input() title:string;
  @Input() description:string;
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.deleted.emit();
  }

}
