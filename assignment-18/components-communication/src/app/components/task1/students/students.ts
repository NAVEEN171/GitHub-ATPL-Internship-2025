import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  @Input() students: string[] = [];
  selectedStudent = '';
  @Output() notifyParent = new EventEmitter<string>();
  onCheckBoxChange(event: Event, tempStudent: string) {
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      console.log('checked');
      this.selectedStudent = tempStudent;
      this.notifyParent.emit(`Student ${this.selectedStudent} Selected`);
    }
  }
}
