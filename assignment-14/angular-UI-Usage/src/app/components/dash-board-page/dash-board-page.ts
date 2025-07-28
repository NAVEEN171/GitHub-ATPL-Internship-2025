import { Component } from '@angular/core';
import { ToolSideNav } from '../tool-side-nav/tool-side-nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-board-page',
  imports: [ToolSideNav, RouterOutlet],
  templateUrl: './dash-board-page.html',
  styleUrl: './dash-board-page.css',
})
export class DashBoardPage {
  routerArray: any[] = [
    { name: 'dashboard', route: '../Dashboard' },
    { name: 'Login', route: 'login' },
    {
      name: 'dialog-demo',
      route: 'dialog-demo',
    },
    { name: 'Button', route: 'welcome' },
  ];
  renderOutlet: boolean = false;
}
