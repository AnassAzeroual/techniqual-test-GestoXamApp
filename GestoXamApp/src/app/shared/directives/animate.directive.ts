import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateDirective implements OnInit, OnChanges, OnDestroy {
  @Input() appAnimate: string = 'fadeIn';
  @Input() animationDelay: string = '0s';
  @Input() animationDuration: string = '1s';
  @Input() secondAnimation: string = '';
  @Input() secondAnimationDelay: number = 0;
  @Input() secondAnimationDuration: string = '1s';
  
  private currentAnimation: string = '';
  private secondAnimationTimeout: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.applyAnimation();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appAnimate'] || changes['animationDelay'] || changes['animationDuration'] || 
        changes['secondAnimation'] || changes['secondAnimationDelay'] || changes['secondAnimationDuration']) {
      this.clearSecondAnimationTimeout();
      this.applyAnimation();
    }
  }

  private applyAnimation() {
    const element = this.el.nativeElement;
    
    // Clear any existing second animation timeout
    this.clearSecondAnimationTimeout();
    
    // Remove previous animation classes
    if (this.currentAnimation) {
      element.classList.remove('animate__animated', `animate__${this.currentAnimation}`);
    }
    
    // Add new animation classes
    element.classList.add('animate__animated', `animate__${this.appAnimate}`);
    this.currentAnimation = this.appAnimate;
    
    // Set custom duration and delay for first animation
    element.style.animationDuration = this.animationDuration;
    element.style.animationDelay = this.animationDelay;
    
    // Force reflow to restart animation
    element.offsetHeight;
    
    // Setup second animation if specified
    if (this.secondAnimation && this.secondAnimationDelay > 0) {
      this.secondAnimationTimeout = setTimeout(() => {
        this.applySecondAnimation();
      }, this.secondAnimationDelay);
    }
  }

  private applySecondAnimation() {
    const element = this.el.nativeElement;
    
    // Remove first animation classes
    if (this.currentAnimation) {
      element.classList.remove('animate__animated', `animate__${this.currentAnimation}`);
    }
    
    // Add second animation classes
    element.classList.add('animate__animated', `animate__${this.secondAnimation}`);
    this.currentAnimation = this.secondAnimation;
    
    // Set custom duration for second animation (no delay as it's triggered by timeout)
    element.style.animationDuration = this.secondAnimationDuration;
    element.style.animationDelay = '0s';
    
    // Force reflow to restart animation
    element.offsetHeight;
  }

  private clearSecondAnimationTimeout() {
    if (this.secondAnimationTimeout) {
      clearTimeout(this.secondAnimationTimeout);
      this.secondAnimationTimeout = null;
    }
  }

  ngOnDestroy() {
    this.clearSecondAnimationTimeout();
  }
}
