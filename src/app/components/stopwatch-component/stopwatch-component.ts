import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stopwatch-component',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch-component.html',
  styleUrls: ['./stopwatch-component.scss'],
})
export class StopwatchComponent {
  time: string = '00:00.000'; // Format: MM:SS.milliseconds
  running: boolean = false;
  private elapsedTime: number = 0; // Milliseconds   zamane separi shode
  private subscription: Subscription | null = null; // Subscription to handle the interval|giving subscription type when we equal subscribe to variable

  // Format time: MM:SS.milliseconds
  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  }

  toggleStart() {
    if (this.running) {
      // Stop the interval
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.running = false;
    } else {
      // Start the interval using RxJS interval
      const startTime = Date.now() - this.elapsedTime;

      this.subscription = interval(1).subscribe(() => {
        this.elapsedTime = Date.now() - startTime;
        this.time = this.formatTime(this.elapsedTime);
      });

      this.running = true;
    }
  }

  reset() {
    // Stop the interval and reset the time
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.running = false;
    this.elapsedTime = 0;
    this.time = '00:00.000';
  }
}
