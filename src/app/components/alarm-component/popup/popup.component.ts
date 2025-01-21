import { CommonModule } from '@angular/common';
import { Component, signal, model, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PopupComponent {
  router: Router = inject(Router);
  userSelectedTime = output<string>();
  data = signal('');
  showPopup = model<boolean>(false);

  removePopup() {
    this.showPopup.set(false);
  }
  getAlarmTime() {
    this.userSelectedTime.emit(this.data());
    this.removePopup();
  }
}
