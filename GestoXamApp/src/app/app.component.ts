import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from './pages/splash/splash.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HelpersService } from './shared/services/helpers.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SplashComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestoXamApp';
  constructor(private readonly srvHelper: HelpersService) {
    srvHelper.switchTheme();
  }
}
