import { Component, OnInit } from '@angular/core';
import { ToolSideNav } from '../tool-side-nav/tool-side-nav';
import { RouterOutlet } from '@angular/router';
import { FlipkartToggle } from '../../services/flipkart-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-board-page',
  imports: [ToolSideNav, RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './dash-board-page.html',
  styleUrl: './dash-board-page.css',
})
export class DashBoardPage implements OnInit {
  showIframe: boolean = false;
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
  openFlipkartFrame() {
    this.flipkart.toggleFlipKart();
  }
  constructor(private flipkart: FlipkartToggle) {}
  ngOnInit(): void {
    this.flipkart.getFlipKartDetails().subscribe({
      next: (data) => (this.showIframe = data),
      error: (error) => console.log(error),
    });
  }
}
