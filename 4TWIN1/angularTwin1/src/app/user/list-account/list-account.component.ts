import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/shared/model/account';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  listAccounts : Account[];
  @Output() notified = new EventEmitter<string>();
  constructor(private us:UserService) { }

ngOnInit(): void {
   this.us.getAllAccounts().subscribe(res=>this.listAccounts=res);
  }

  deleteAccount(ac:Account){
    this.us.deleteAccount(ac).subscribe(()=>this.us.getAllAccounts().subscribe(res=>this.listAccounts=res));
  }
  sendAccount(acc){
    console.log("listaccount**"+acc);
    this.notified.emit(acc);
     }
}
