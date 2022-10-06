import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
//je veux récupérer le paramètre envoyé dans l'url
  
constructor(ac : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
