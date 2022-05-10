import { Component } from '@angular/core';
import { Application } from 'pixi.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pixi';

  constructor() {
    console.log(new Application());
  }
}
