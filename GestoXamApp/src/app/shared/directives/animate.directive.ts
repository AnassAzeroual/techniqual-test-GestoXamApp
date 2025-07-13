import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateDirective implements OnInit, OnChanges {
  @Input() appAnimate: string = 'fadeIn';
  @Input() animationDelay: string = '0s';
  @Input() animationDuration: string = '1s';
  
  private currentAnimation: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.applyAnimation();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appAnimate'] || changes['animationDelay'] || changes['animationDuration']) {
      this.applyAnimation();
    }
  }

  private applyAnimation() {
    const element = this.el.nativeElement;
    
    // Remove previous animation classes
    if (this.currentAnimation) {
      element.classList.remove('animate__animated', `animate__${this.currentAnimation}`);
    }
    
    // Add new animation classes
    element.classList.add('animate__animated', `animate__${this.appAnimate}`);
    this.currentAnimation = this.appAnimate;
    
    // Set custom duration and delay
    element.style.animationDuration = this.animationDuration;
    element.style.animationDelay = this.animationDelay;
    
    // Force reflow to restart animation
    element.offsetHeight;
  }
}
