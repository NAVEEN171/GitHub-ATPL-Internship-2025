import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[toggleElement]',
})
export class AppToggle implements OnChanges {
  @Input('toggleElement') toggleSection: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  toggleElement() {
    if (!this.toggleSection) {
      this.el.nativeElement.style.display = 'none';
    } else {
      this.el.nativeElement.style.display = 'block';
    }
  }

  ngOnChanges() {
    this.toggleElement();
  }
}
