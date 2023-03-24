import { Component } from '@angular/core';
import { Time } from '../time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent {
  timeInput: Time[] = [];
  dt;
  workerList: any[] = [
    ['Christoph Ratzinger', 30],
    ['Jürgen Jürgenson', 90],
    ['Burgi Kingo', 160]
  ];

  constructor(private timeService: TimeService) {
    this.dt = new Date();
    this.refresh();
  }

  async add(date: string, startTime: string, endTime: string, worker: string){
    const formResponse: HTMLElement = document.getElementById('form-response') as HTMLElement;

    if(date.length <= 0 || startTime.length <= 0 || endTime.length <= 0 || worker.length <= 0 || worker == "Bitte auswählen"){
      formResponse.innerHTML = "Bitte alle Felder ausfüllen.";
    }
    else{
      const dateFormedArr = date.split("-");
      const dateFormed = dateFormedArr[2] + "." + dateFormedArr[1] + "." + dateFormedArr[0];

      const startTimeArr = startTime.split(":");
      const endTimeArr = endTime.split(":");

      const startTimeVal = parseFloat(startTimeArr[0]) + parseFloat(startTimeArr[1])/60;
      const endTimeVal = parseFloat(endTimeArr[0]) + parseFloat(endTimeArr[1])/60;

      let workedTime = endTimeVal - startTimeVal;
      workedTime = Math.round(workedTime * 100)/100;

      let stundenlohn = 0;

      for(var i=0; i<this.workerList.length; i++){
        if(worker == this.workerList[i][0]){
          stundenlohn = this.workerList[i][1];
        }
      }

      if(startTimeVal >= endTimeVal){
        formResponse.innerHTML = "Der Arbeitszeit-Beginn muss vor dem Arbeitszeit-Ende sein.";
      }
      else{
        await this.timeService.add(dateFormed, startTime, endTime, worker, workedTime, stundenlohn);
        await this.refresh();
        formResponse.innerHTML = "Ihre Zeitangabe wurde erfolgreich erfasst.";
      }
    }
  }

  async refresh() {
    this.timeInput = await this.timeService.getAll();
  }
}