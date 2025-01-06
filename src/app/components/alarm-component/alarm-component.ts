import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmCardComponent } from '../alarm-card-component/alarm-card-component';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [CommonModule, AlarmCardComponent],  // Import CommonModule and AlarmCardComponent
  templateUrl: './alarm-component.html',
  styleUrl: './alarm-component.scss',
})
export class AlarmComponent {
  alarms: Date[] = [
    new Date('2025-01-05T07:00:00'), // Example alarm time 1
    new Date('2025-01-05T08:15:00'), // Example alarm time 2
    new Date('2025-01-05T09:30:00'), // Example alarm time 3
    new Date('2025-01-05T10:45:00'), // Example alarm time 4
    new Date('2025-01-05T12:00:00'), // Example alarm time 5
    new Date('2025-01-05T13:15:00'), // Example alarm time 6
    new Date('2025-01-05T14:30:00'), // Example alarm time 7
    new Date('2025-01-05T15:45:00'), // Example alarm time 8
    new Date('2025-01-05T17:00:00'), // Example alarm time 9
    new Date('2025-01-05T18:15:00'), // Example alarm time 10
  ];

  // Get the soonest alarm time
  get soonestAlarm(): Date {
    return new Date(Math.min(...this.alarms.map((alarm) => alarm.getTime())));
  }

  // Add a new alarm
  addAlarm(newAlarmTime: string) {
    this.alarms.push(new Date(newAlarmTime));
  }

  // Remove an alarm
  removeAlarm(alarm: Date) {
    this.alarms = this.alarms.filter(a => a !== alarm);
  }
}
