import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'GestoXamApp';
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = !!localStorage.getItem('darkMode');
    this.setDarkMode(this.isDarkMode);
  }

  toggleDarkMode() {
    this.setDarkMode(this.isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }

  setDarkMode(isDarkMode: boolean) {
    console.log(`Setting dark mode to: ${isDarkMode}`);
    
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      this.isDarkMode = false;
    } else {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
    }
  }
}
