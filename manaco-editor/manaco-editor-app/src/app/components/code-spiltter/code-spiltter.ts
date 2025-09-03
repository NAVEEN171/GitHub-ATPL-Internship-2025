import { Component } from '@angular/core';

import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ManacoEditor } from '../manaco-editor/manaco-editor';

@Component({
  selector: 'app-code-spiltter',
  imports: [SplitterModule, CardModule, PanelModule, ManacoEditor],
  templateUrl: './code-spiltter.html',
  styleUrl: './code-spiltter.css',
})
export class CodeSpiltter {}
