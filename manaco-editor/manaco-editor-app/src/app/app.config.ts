import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { leetcodeTheme } from './leetcodeTheme';
import { lightTheme } from './lightTheme';

const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    (window as any).monaco.editor.defineTheme('leetcodeTheme', leetcodeTheme);
    (window as any).monaco.editor.defineTheme('lightTheme', lightTheme);
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
