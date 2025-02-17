import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ColorsComponent } from "./components/colors/colors.component";
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatDividerModule, ColorsComponent, NgIf, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  title = 'ng-m3-colors';

  ngOnInit(): void {
    this.detectSystemTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.setMode();
  }

  setMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }

  detectSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    this.setMode();

  }
}
