import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppResizeTracker]',
})
export class AppResizeTracker {
  constructor(private el: ElementRef) {}

  @HostListener('window:resize', [`$event`]) onResize(event: any) {
    console.log(this.el.nativeElement.offsetHeight);
    console.log(this.el.nativeElement.offsetWidth);
  }
}
