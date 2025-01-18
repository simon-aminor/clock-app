import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimeZone, TIME_ZONES } from './time-zone';
import { AppWorldService } from './world-list.service';

@Component({
  selector: 'app-world-clock-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './world-clock-component.html',
  styleUrl: './world-clock-component.scss',
})
export class WorldClockComponent {
  timeZones: TimeZone[] = TIME_ZONES; // list of times available
  selectedTimeZone: string = ''; //user choice
  userTimeZones: TimeZone[] = []; //   users selection
  subscription!: Subscription;

  private appWorldList = inject(AppWorldService);

  getCurrentTime(offset: number): string {
    return this.appWorldList.formatTime(offset);
  }
  constructor() {
    if (localStorage.getItem('user timezone')) {
      this.userTimeZones = JSON.parse(
        localStorage.getItem('user timezone') ?? ''
      );
      this.appWorldList.refresh(this.subscription, this.userTimeZones);
    }
  }
  addTimeZone() {
    this.appWorldList.add(
      this.userTimeZones,
      this.selectedTimeZone,
      this.timeZones
    );
    this.selectedTimeZone = '';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  removeTimeZone(zone: string) {
    this.userTimeZones = this.appWorldList.remove(this.userTimeZones, zone);
  }
}
