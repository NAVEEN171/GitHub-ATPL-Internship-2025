import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSideNav } from './tool-side-nav';

describe('ToolSideNav', () => {
  let component: ToolSideNav;
  let fixture: ComponentFixture<ToolSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolSideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolSideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
