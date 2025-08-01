import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
  @Input() students: string[] = [];
  selectedStudent = '';
  localStorageMember: string | null = '';
  @Output() notifyParent = new EventEmitter<string>();
  onCheckBoxChange(event: Event, tempStudent: string) {
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedStudent = tempStudent;
      localStorage.setItem('last-selected', tempStudent);
      this.notifyParent.emit(`Student ${this.selectedStudent} Selected`);
    } else {
      this.selectedStudent = '';
      localStorage.removeItem('last-selected');
    }
  }
  ngOnInit(): void {
    this.localStorageMember = localStorage.getItem('last-selected');
    if (this.localStorageMember) {
      this.selectedStudent = this.localStorageMember;
    }
  }
}
