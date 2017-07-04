import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() receivedMessage;
  @Output() update = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }

}
