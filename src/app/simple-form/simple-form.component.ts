import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick(value){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
