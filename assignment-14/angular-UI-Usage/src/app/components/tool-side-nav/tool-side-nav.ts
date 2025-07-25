import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

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
  ],
  templateUrl: './tool-side-nav.html',
  styleUrl: './tool-side-nav.css',
})
export class ToolSideNav {
  events = [
    { name: 'Home', route: 'home' },
    { name: 'Profile', route: 'profile' },
  ];
  opened: boolean = true;
}
