import { Routes } from '@angular/router';
import { ElementResizeListener } from './components/element-resize-listener/element-resize-listener';
import { CountdownTimerDisplay } from './components/countdown-timer-display/countdown-timer-display';
import { DisableComponent } from './components/disable-component/disable-component';
import { HighlightOnHoverComponent } from './components/highlight-on-hover-component/highlight-on-hover-component';
import { AppToggleComponent } from './components/app-toggle-component/app-toggle-component';
import { RoleBasedContent } from './components/role-based-content/role-based-content';
import { FaqListRoleBased } from './components/faq-list-role-based/faq-list-role-based';

export const routes: Routes = [
  { path: '', component: AppToggleComponent, pathMatch: 'full' },

  { path: 'resize-listener', component: ElementResizeListener },
  { path: 'highlight', component: HighlightOnHoverComponent },
  { path: 'disable', component: DisableComponent },
  { path: 'count-down', component: CountdownTimerDisplay },
  { path: 'role-based', component: RoleBasedContent },
  { path: 'faq-list', component: FaqListRoleBased },
];
