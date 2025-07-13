import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStatusBorder]',
  standalone: true
})
export class StatusBorderDirective implements OnInit, OnChanges {
  @Input() appStatusBorder: string | undefined = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.applyBorderColor();
  }

  ngOnChanges() {
    this.applyBorderColor();
  }

  private applyBorderColor() {
    const element = this.el.nativeElement;
    const borderColor = this.getStatusBorderColor(this.appStatusBorder);
    
    element.style.borderLeftColor = borderColor;
  }

  private getStatusBorderColor(status: string | undefined): string {
    if (!status || status === 'En attente') {
      return ''; // Yellow for pending/waiting
    }
    
    switch (status.toLowerCase()) {
      case 'confirmé':
        return '#28a745'; // Green for confirmed
      case 'en recherche de place':
        return '#17a2b8'; // Blue for searching
      case 'à organiser':
        return '#fd7e14'; // Orange for to organize
      case 'annulé':
        return '#dc3545'; // Red for cancelled
      default:
        return '#6c757d'; // Gray for unknown status
    }
  }
}
