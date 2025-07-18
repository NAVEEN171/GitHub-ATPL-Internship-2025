import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountDown]',
})
export class CountDown {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  time = 0;
  intervalId: number | null = null;

  @HostListener('click') disableStarts() {
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    this.showTime();
  }
  private clearTimeout() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.el.nativeElement.innerHTML = 'Retry';
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
  private showTime() {
    this.time = 10;
    this.el.nativeElement.innerHTML = 10 + ' seconds';
    this.intervalId = setInterval(() => {
      this.time = this.time - 1;

      this.el.nativeElement.innerHTML = this.time + ' seconds';
    }, 1000);
    setTimeout(() => {
      this.clearTimeout();
    }, 10000);
  }
}
