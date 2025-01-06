import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alarm-card',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule
  templateUrl: './alarm-card-component.html',
  styleUrls: ['./alarm-card-component.scss'],
})
export class AlarmCardComponent {
  @Input() alarm!: Date; // Alarm input
  @Output() remove = new EventEmitter<Date>(); // Output for remove event

  // Method to remove the alarm
  onRemove() {
    this.remove.emit(this.alarm);
  }
}
