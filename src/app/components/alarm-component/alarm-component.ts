import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmCardComponent } from '../alarm-card-component/alarm-card-component';
import { PopupComponent } from './popup/popup.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [CommonModule, AlarmCardComponent, PopupComponent, RouterModule], // Import CommonModule and AlarmCardComponent
  templateUrl: './alarm-component.html',
  styleUrl: './alarm-component.scss',
})
export class AlarmComponent {
  // Example list of alarm times
  alarms: string[] = [];
  showAddPopup = signal(false);
  router: Router = inject(Router);
  temp: any;

  ngOnInit(): void {
    if (localStorage.getItem('alarmList')) {
      this.temp = JSON.parse(localStorage.getItem('alarmList') ?? '');
      this.alarms = [...this.temp];
      this.alarms.sort();
    }
  }
  constructor() {
    this.alarms.sort();
  }

  // Get the soonest alarm time
  get soonestAlarm(): string {
    return this.alarms[0];
  }

  // Add a new alarm
  showPopup() {
    this.showAddPopup.set(true);
  }

  handleUserSelectTime(data: any) {
    if (data.split(':')[0] <= 24 && data.split(':')[1] <= 60) {
      this.alarms.push(data);
      localStorage.setItem('alarmList', JSON.stringify(this.alarms));
      this.alarms.sort();
    } else {
      alert('Invalid time');
    }
  }

  // Remove an alarm
  removeAlarm(alarm: string) {
    this.alarms = this.alarms.filter((a) => a !== alarm);
    this.alarms.sort();
  }
}
