import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmCardComponent } from '../alarm-card-component/alarm-card-component';
import { PopupComponent } from './popup/popup.component';
import { Router, RouterModule } from '@angular/router';
import { AppAlarmlist } from './alarm-list.service';

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
  appAlarmsList = inject(AppAlarmlist);

  constructor() {
    this.alarms = this.appAlarmsList.render(this.alarms);
  }

  // Get the soonest alarm time
  get soonestAlarm(): string {
    // readonly function
    return this.alarms[0];
  }

  // Add a new alarm
  showPopup() {
    this.showAddPopup.set(true);
  }

  handleUserSelectTime(data: any) {
    this.appAlarmsList.addAlarm(this.alarms, data);
  }

  // Remove an alarm
  removeAlarm(alarm: string) {
    this.alarms = this.appAlarmsList.remove(this.alarms, alarm);
  }
}
