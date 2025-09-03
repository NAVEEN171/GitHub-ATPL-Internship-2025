import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ThemeService } from '../../services/theme-service';
interface monacoEditorType {
  language: string;
  automaticLayout: boolean;
}
@Component({
  selector: 'app-manaco-editor',
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './manaco-editor.html',
  styleUrl: './manaco-editor.css',
})
export class ManacoEditor implements OnInit {
  editorOptions: monacoEditorType = {
    language: 'cpp',
    automaticLayout: true,
  };

  constructor(private applyTheme: ThemeService) {}

  toggletheme() {
    this.applyTheme.setTheme();
  }

  changeEditorOptions(currentLanguage: string) {
    if (this.editorOptions.language !== currentLanguage) {
      this.editorOptions = { ...this.editorOptions, language: currentLanguage };
      this.code = '';
    }
  }

  ngOnInit(): void {
    this.applyTheme.ApplyIntialtheme('lightTheme');
  }

  code = `
  // C++ program to check if the number is even
// or odd using modulo operator
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 11;

    // If n is completely divisible by 2
    if (n % 2 == 0)
        cout << "Even";

    // If n is NOT completely divisible by 2
    else
        cout << "Odd";
    return 0;
}
   `;
}
