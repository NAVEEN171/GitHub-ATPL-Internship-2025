import { Component } from '@angular/core';
import { FaqQuestion } from '../faq-question/faq-question';
import { QuestionsType } from '../../interfaces/single-question';
import { FormsModule } from '@angular/forms';
import { SingleQuestion } from '../../interfaces/single-question';
import { CommonModule } from '@angular/common';
import { HighlightOnHover } from '../../directives/highlight-on-hover';

@Component({
  selector: 'app-faq-list-role-based',
  imports: [FaqQuestion, FormsModule, CommonModule],
  templateUrl: './faq-list-role-based.html',
  styleUrl: './faq-list-role-based.css',
})
export class FaqListRoleBased {
  Roles: string[] = ['Class8', 'Class5', 'Admin'];
  currentRole: string = '';
  accessData: SingleQuestion[] | null = null;
  adminCategory: string = '';
  Questions: QuestionsType = {
    Class5: [
      {
        name: 'q1',
        question: 'What is the capital of India?',
        answer: 'New Delhi',
        options: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'],
      },
      {
        name: 'q2',
        question: 'Which is the largest planet in our solar system?',
        answer: 'Jupiter',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      },
      {
        name: 'q3',
        question: 'How many sides does a triangle have?',
        answer: '3',
        options: ['2', '3', '4', '5'],
      },
    ],
    Class8: [
      {
        name: 'q1',
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: 'William Shakespeare',
        options: [
          'Charles Dickens',
          'William Shakespeare',
          'Mark Twain',
          'Jane Austen',
        ],
      },
      {
        name: 'q2',
        question: 'What is the chemical symbol for gold?',
        answer: 'Au',
        options: ['Go', 'Gd', 'Au', 'Ag'],
      },
      {
        name: 'q3',
        question: 'In which year did India gain independence?',
        answer: '1947',
        options: ['1945', '1946', '1947', '1948'],
      },
    ],
  };
  onAdminChange(questionCategory: string) {
    this.accessData = this.Questions[questionCategory] || null;
    this.adminCategory = questionCategory;
  }

  onRoleChange(newRole: string) {
    if (this.currentRole === 'Admin') {
      this.adminCategory = 'Class5';
      this.accessData = this.Questions['Class5'] || null;
    } else if (this.Roles.includes(this.currentRole)) {
      this.adminCategory = 'Class5';
      this.accessData = this.Questions[this.currentRole] || null;
    } else {
      this.accessData = null;
    }
  }
}
