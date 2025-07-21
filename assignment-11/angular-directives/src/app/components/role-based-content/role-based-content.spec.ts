import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedContent } from './role-based-content';

describe('RoleBasedContent', () => {
  let component: RoleBasedContent;
  let fixture: ComponentFixture<RoleBasedContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleBasedContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleBasedContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
