import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appDisableBasedCondition]',
})
export class DisableBasedCondition implements OnChanges {
  @Input('appDisableBasedCondition') inputString: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  disableElement() {
    if (this.inputString) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
  ngOnChanges() {
    this.disableElement();
  }
}
