import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HighlightOnHover {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') MouseEnter() {
    this.addColor();
  }
  @HostListener('mouseleave') MouseLeave() {
    this.removeColor();
  }
  private addColor() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
  private removeColor() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
