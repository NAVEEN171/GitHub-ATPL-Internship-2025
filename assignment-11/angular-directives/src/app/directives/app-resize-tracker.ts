import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppResizeTracker]',
})
export class AppResizeTracker {
  resizeListener: number | null = null;
  constructor(private el: ElementRef) {}

  @HostListener('window:resize', [`$event`]) onResize(event: Event) {
    if (this.resizeListener !== null) {
      clearTimeout(this.resizeListener);
    }
    this.resizeListener = setTimeout(() => {
      console.log(
        ` ${this.el.nativeElement.className} height:-  ${this.el.nativeElement.offsetHeight}`
      );
      console.log(
        ` ${this.el.nativeElement.className}  width:- ${this.el.nativeElement.offsetWidth}`
      );
    }, 300);
  }
}
