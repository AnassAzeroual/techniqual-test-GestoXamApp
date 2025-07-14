import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimateDirective } from '../../shared/directives/animate.directive';

@Component({
  selector: 'app-splash',
  imports: [AnimateDirective],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Navigate to exams page after animation completes
    setTimeout(() => {
      // this.router.navigate(['/exams']);
    }, 3000); // 3 seconds delay
  }
}
