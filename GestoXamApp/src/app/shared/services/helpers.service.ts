import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
isDarkMode = !JSON.parse(localStorage.getItem('darkMode') || 'false');

constructor() { }

switchTheme() {
    if (this.isDarkMode) {
      document.body.classList.remove('dark-mode');
      this.isDarkMode = false;
    } else {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
    }
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    return this.isDarkMode;
  }

}
