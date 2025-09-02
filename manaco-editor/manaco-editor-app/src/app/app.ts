import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManacoEditor } from './components/manaco-editor/manaco-editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ManacoEditor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'manaco-editor-app';
}
