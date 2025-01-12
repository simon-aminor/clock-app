import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmCardComponent } from '../alarm-card-component/alarm-card-component';
import { PopupComponent } from './popup/popup.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [CommonModule, AlarmCardComponent, PopupComponent, RouterModule], // Import CommonModule and AlarmCardComponent
  templateUrl: './alarm-component.html',
  styleUrl: './alarm-component.scss',
})
export class AlarmComponent {
  // Example list of alarm times
  showAddPopup = signal(false);
  router: Router = inject(Router);

  ngOnInit(): void {
    console.log("alarm component");
    
    if (localStorage.getItem('alarmList')) {
      this.alarms.push(JSON.parse(localStorage.getItem('alarmList') ?? ''));
      this.alarms.sort();
    }
  }

  alarms: string[] = [
    '12:30',
    '14:00',
    '18:35',
    '22:12',
    '20:00',
    '23:00',
    '10:56',
    '08:00',
    '06:45',
  ];
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
    if (data.split(':')[0] < 24 && data.split(':')[1] < 60) {
      this.alarms.push(data);
      localStorage.setItem('alarmList', JSON.stringify(data));
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
