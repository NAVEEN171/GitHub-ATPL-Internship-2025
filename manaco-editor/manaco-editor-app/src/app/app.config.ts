import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { leetcodeTheme } from './leetcodeTheme';

const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    console.log('I am running');
    (window as any).monaco.editor.defineTheme('leetcodeTheme', leetcodeTheme);
    (window as any).monaco.editor.setTheme('leetcodeTheme');
  },
};
import { routes } from './app.routes';
import {
  NgxMonacoEditorConfig,
  provideMonacoEditor,
} from 'ngx-monaco-editor-v2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMonacoEditor(monacoConfig),
  ],
};
