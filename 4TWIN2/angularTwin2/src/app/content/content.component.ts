import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from '../models/account';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listAccounts : Account[];
  @Output() notified2 = new EventEmitter<string>();
  constructor(private us:UserService) { }
  showUsers(cat:string){
    this.notified2.emit(cat);
  }
  delete(account:Account){
    console.log("je suis le parent");
    this.us.deleteAccount(account).subscribe(()=>this.us.getAllAccountsFromDb().subscribe(
      res=>this.listAccounts=res));
  }
  ngOnInit(): void {
    this.us.getAllAccountsFromDb().subscribe(
      res=>this.listAccounts=res);
  }

}
