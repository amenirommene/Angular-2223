import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id : number = 0 ;
  constructor(private ac : ActivatedRoute) { }

  ngOnInit(): void {
   // console.log(this.ac.snapshot.params['id']);
   this.ac.paramMap.subscribe(data=>{this.id=Number(data.get('id'))});
   //console.log(this.id);
  }

}
