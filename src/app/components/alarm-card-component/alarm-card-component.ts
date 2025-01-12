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
  @Input() alarm!: string; // Alarm input
  @Output() remove = new EventEmitter<string>(); // Output for remove event

  // Method to remove the alarm
  onRemove() {
    this.remove.emit(this.alarm);
  }
}
