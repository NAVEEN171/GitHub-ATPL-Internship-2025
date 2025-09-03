import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSpiltter } from './code-spiltter';

describe('CodeSpiltter', () => {
  let component: CodeSpiltter;
  let fixture: ComponentFixture<CodeSpiltter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSpiltter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSpiltter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
