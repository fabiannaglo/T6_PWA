import { Component } from '@angular/core';
import { Time } from '../time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-week-output',
  templateUrl: './week-output.component.html',
  styleUrls: ['./week-output.component.scss']
})
export class WeekOutputComponent {
  timeInput: Time[] = [];
  timeList: string[] = [];
  today: string;
  gesWorktime: number = 0;
  gesWorker: number = 0;
  longestWorktime: number = 0;
  longestWorker: string = '';
  gesamtkosten: number = 0;

  constructor(private timeService: TimeService) {
    this.timeList = this.getLastWeek();
    this.today = this.timeList[0];
    this.refresh();
  }

  async refresh(){
    this.timeInput = await this.timeService.getAll();


    // Get Information
    let workerArr: string[] = [];
    let longestTime: number = 0;
    let longestWrker: string = '';

    for(var i=0; i<this.timeInput.length; i++){
      if(this.timeInput[i].date == this.timeList[0]){
        this.gesWorktime += this.timeInput[i].workedTime;
  
        if(!workerArr.includes(this.timeInput[i].worker)){
          workerArr.push(this.timeInput[i].worker);
        }
  
        if(this.timeInput[i].workedTime > longestTime){
          longestTime = this.timeInput[i].workedTime;
          longestWrker = this.timeInput[i].worker;
        }

        this.gesamtkosten += this.timeInput[i].workedTime * this.timeInput[i].stundenlohn;
      }
    }
    this.gesWorktime = Math.round(this.gesWorktime*100)/100;
    this.gesWorker = workerArr.length;
    this.longestWorktime = Math.round(longestTime*100)/100;
    this.longestWorker = longestWrker;
  }

  getLastWeek(){
    let arr = [];

    for(var i=0; i<7; i++){
      let d = new Date();
      d.setDate(d.getDate() - i);

      let currDay: string = d.getDate().toString();
      let currMonth: string = (d.getMonth() + 1).toString();
      let currYear: string = d.getFullYear().toString();

      if(currMonth.length <= 1){
        currMonth = '0' + currMonth;  
      }
  
      if(currDay.length <= 1){
        currDay = '0' + currDay;  
      }

      arr.push(currDay + "." + currMonth + "." + currYear);
    }

    console.log(arr);

    return arr;
  }

}