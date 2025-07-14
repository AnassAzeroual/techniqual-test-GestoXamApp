import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  constructor(private readonly srvHelper: HelpersService) {
    this.isDarkMode = srvHelper.isDarkMode;
  }

  ngOnInit() {
  }

  toggleDarkMode() {
    this.isDarkMode = this.srvHelper.switchTheme();
  }

  
}
