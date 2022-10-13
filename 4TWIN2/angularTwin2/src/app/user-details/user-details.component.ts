import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
//je veux récupérer le paramètre envoyé dans l'url
  id : number;
constructor(private ac : ActivatedRoute) { }

  ngOnInit(): void {
   // this.id=this.ac.snapshot.params['id'];
   this.ac.paramMap.subscribe(result=>{console.log(result); this.id=+result.get('id')});
   console.log(this.id);
  }

}
