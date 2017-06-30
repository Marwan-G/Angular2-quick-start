import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick(event, value){
    console.log(value);
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
