import { Component } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent {
  constructor() {
  }

  async add(){
    console.log("Zeit hinzugefügt.")
  }
}