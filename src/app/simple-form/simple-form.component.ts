import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: [`
    :host{
    display:flex;
    flex-direction: column;
    }
    *{
    font-family: monospace;
    }
    input:focus{
    font-weight: bold;
    outline: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {
  @Input() receivedMessage;
  @Output() update = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }

}
