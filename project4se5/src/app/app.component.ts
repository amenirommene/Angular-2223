import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'project4se5';
   nb:number = 5;
   f(){
    console.log("je suis le bouton");
   }
}
