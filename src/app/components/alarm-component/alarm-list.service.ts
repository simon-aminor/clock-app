import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppAlarmlist {
  temp: any;
  available?: boolean;

  // primitive types are not allowed in Angular services
  addAlarm(alarms: string[], data: any): void {
    alarms.find((alarm) => {
      if (alarm == data) {
        this.available = true;
      }
    });
    if (
      data.split(':')[0] <= 24 &&
      data.split(':')[1] <= 60 &&
      !this.available
    ) {
      alarms.push(data);
      localStorage.setItem('alarmList', JSON.stringify(alarms));
      alarms.sort();
    } else if (this.available) {
      alert('you already have this alarm');
      this.available = false;
    } else {
      alert('Invalid time');
    }
  }
  remove(alarms: string[], alarm: string): string[] {
    alarms = alarms.filter((a) => a !== alarm);
    localStorage.setItem('alarmList', JSON.stringify(alarms));
    alarms.sort();
    return alarms;
  }
  render(alarms: string[]): string[] {
    if (localStorage.getItem('alarmList')) {
      this.temp = JSON.parse(localStorage.getItem('alarmList') ?? '');
      alarms = [...this.temp];
    }
    return alarms.sort();
  }
}
