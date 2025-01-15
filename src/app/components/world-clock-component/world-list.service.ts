import { Injectable } from '@angular/core';
import { TimeZone } from './time-zone';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppWorldService {
  available: any;
  formatTime(offset: number) {
    if (offset === null) {
      return ''; // Handle case where no time zone is selected
    }
    const now = new Date();
    const utcTime = now.getTime() + (offset - 3.5) * 3600000; // Convert offset to milliseconds
    const localTime = new Date(utcTime); // milliseconds to readble time
    return localTime.toLocaleTimeString(); //to string and 24 or 12 hour
  }
  set(userTimeZones: TimeZone[]) {
    console.log('set');

    localStorage.setItem('user timezone', JSON.stringify(userTimeZones));
  }
  add(
    userTimeZones: TimeZone[],
    selectedTimeZone: string,
    timeZones: TimeZone[]
  ): any {
    userTimeZones.find((zone) => {
      if (zone.name == selectedTimeZone) {
        this.available = true;
      } else {
        this.available == false;
      }
    });

    if (selectedTimeZone && !this.available) {
      const selected = timeZones.find((e) => e.name === selectedTimeZone);
      if (selected) userTimeZones.push(selected);
      // this.refresh();
      this.set(userTimeZones);
    } else if (this.available) {
      alert('Time zone already added');
      this.available = false;
    }
  }
  refresh(subscription: Subscription, userTimeZones: TimeZone[]) {
    subscription = interval(1000).subscribe((userTimeZones) => {
      userTimeZones;
    });
  }
}
