import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmCardComponent } from '../alarm-card-component/alarm-card-component';
import { PopupComponent } from './popup/popup.component';
import { Router, RouterModule } from '@angular/router';
import { AppAlarmlist } from './alarm-list.service';
import { interval, Subscription } from 'rxjs';

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
  subscription!: Subscription;
  now!: any; // use and difine later
  ring?: string; // undifind and use later
  audio = new Audio('assets/din-ding-89718.mp3');

  constructor() {
    this.alarms = this.appAlarmsList.render(this.alarms);
    this.refresh();
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

  refresh() {
    this.subscription = interval(1000).subscribe(() => {
      this.now = new Date();
      this.now = this.now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      this.ring = this.alarms.find((alarm) => {
        return alarm == this.now;
      });

      if (this.ring) {
        this.playAudio();
      }
    });
  }
  playAudio() {
    this.audio.muted = true; // Start muted for autoplay
    this.audio
      .play()
      .then(() => {
        this.audio.muted = false; // Unmute after playback starts
      })
      .catch((error) => {
        console.error('Audio playback failed:', error);
      });
  }
}
