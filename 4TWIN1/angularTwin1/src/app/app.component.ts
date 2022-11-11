import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({ //méta data
  selector: 'app-root',
  templateUrl: './app.component.html', // template: '<h2>Angular</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'angularprojectTwin1';
}
