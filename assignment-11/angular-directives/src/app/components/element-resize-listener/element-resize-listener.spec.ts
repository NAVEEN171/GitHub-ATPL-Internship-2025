import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementResizeListener } from './element-resize-listener';

describe('ElementResizeListener', () => {
  let component: ElementResizeListener;
  let fixture: ComponentFixture<ElementResizeListener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementResizeListener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementResizeListener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
