import { Component } from '@angular/core';
import {MailService} from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <app-simple-form></app-simple-form>
  <h2>{{mail.message}} </h2>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey Let Us Understand Angular2!';
  constructor(private mail:MailService){

  }
}
