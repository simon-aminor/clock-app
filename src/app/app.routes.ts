import { Routes } from '@angular/router';
import { AlarmCardComponent } from './components/alarm-card-component/alarm-card-component';
import { AlarmComponent } from './components/alarm-component/alarm-component';
import { PopupComponent } from './components/alarm-component/popup/popup.component';
import { StopwatchComponent } from './components/stopwatch-component/stopwatch-component';
import { WorldClockComponent } from './components/world-clock-component/world-clock-component';

export const routes: Routes = [
  {
    path: 'Alarm/popup',
    component: PopupComponent,
  },
  {
    path: 'Alarm',
    component: AlarmComponent,
  },
  {
    path: 'World-clock',
    component: WorldClockComponent,
  },
  {
    path: 'Stopwatch',
    component: StopwatchComponent,
  },
];
