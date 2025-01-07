import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StopwatchComponent } from './components/stopwatch-component/stopwatch-component';
import { WorldClockComponent } from './components/world-clock-component/world-clock-component';
import { AlarmComponent } from './components/alarm-component/alarm-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StopwatchComponent,
    WorldClockComponent,
    AlarmComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clock-app';
  activeButton: string = 'Alarm';
  componentClickhandler(button: string) {
    this.activeButton = button;
  }
}
