import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  model,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PopupComponent {
  showPopup = model<boolean>(false);

  togglePopup() {
    this.showPopup.set(false);
  }
  getAlarmTime(){
    
  }
}
