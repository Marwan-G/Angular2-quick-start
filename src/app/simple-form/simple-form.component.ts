import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() receivedMessage;
  onClick(event, value){
    console.log(value);
    console.log(event);
  }
  constructor() {
    setInterval(()=>this.receivedMessage= Math.random().toString(),2000);
  }
  ngOnInit() {
  }

}
