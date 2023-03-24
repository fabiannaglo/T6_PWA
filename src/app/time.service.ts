import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeService extends Dexie {
  times!: Dexie.Table<Time, string>;

  constructor() {
    super("time-db");
    this.version(1).stores({
      times: 'id'
    });
  }

  async add(date: string, startTime: string, endTime: string, worker: string, workedTime: number, stundenlohn: number){
    const trackedTime = { id: crypto.randomUUID(), date: date, startTime: startTime, endTime: endTime, worker: worker, workedTime: workedTime, stundenlohn: stundenlohn };
    await this.times.add(trackedTime);
  }

  async getAll() {
    return await this.times.toArray();
  }

  async bulkPut(times: Time[]) {
    await this.times.bulkPut(times);
  }

  async clearAll(){
    indexedDB.deleteDatabase("time-db");
  }
}