import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlight {
  @Input('appHighlight') highlightColor: string = 'yellow';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  @HostListener('input') onKeyPress() {
    if (this.el.nativeElement.className.includes('ng-invalid')) {
      console.log(true);
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
