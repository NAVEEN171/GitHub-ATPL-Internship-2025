import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlipkartToggle } from '../../services/flipkart-toggle';

@Component({
  selector: 'app-tool-side-nav',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatSlideToggleModule,
  ],
  templateUrl: './tool-side-nav.html',
  styleUrl: './tool-side-nav.css',
})
export class ToolSideNav {
  darkMode: boolean = false;
  @Input() events?: any[] = [
    { name: 'Home', route: 'home' },
    { name: 'Profile', route: 'profile' },
  ];
  @Input() needOutlet?: boolean = true;
  opened: boolean = true;
  constructor(private flipkart: FlipkartToggle) {}
  toggleTheme() {
    if (this.darkMode) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
    this.darkMode = !this.darkMode;
  }
  openFlipkartFrame() {
    this.flipkart.toggleFlipKart();
  }
}
