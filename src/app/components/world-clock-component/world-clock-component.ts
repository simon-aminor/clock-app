import { Component, effect, signal } from '@angular/core';
import { TIME_ZONES, TimeZone } from './time-zone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-world-clock-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './world-clock-component.html',
  styleUrl: './world-clock-component.scss',
})
export class WorldClockComponent {
  timeZones: TimeZone[] = TIME_ZONES; // list of times available
  selectedTimeZone: string | null = null; //user choice
  userTimeZones: TimeZone[] = []; //   users selection

  getCurrentTime(offset: number): string {
    if (offset === null) {
      return ''; // Handle case where no time zone is selected
    }
    const now = new Date();
    const utcTime = now.getTime() + offset * 3600000; // Convert offset to milliseconds
    const localTime = new Date(utcTime); // milliseconds to readble time
    return localTime.toLocaleTimeString(); //to string and 24 or 12 hour
  }
  addTimeZone() {
    if (this.selectedTimeZone) {
      const selected = this.timeZones.find(
        (e) => e.name === this.selectedTimeZone
      );
      if (selected) this.userTimeZones.push(selected);
      this.selectedTimeZone = null; // Clear selection after adding
    }
  }

  removeTimeZone(zone: TimeZone) {
    this.userTimeZones = this.userTimeZones.filter((z) => z !== zone);
  }
}