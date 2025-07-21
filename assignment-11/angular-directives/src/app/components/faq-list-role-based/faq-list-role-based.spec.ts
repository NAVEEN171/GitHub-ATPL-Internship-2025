import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListRoleBased } from './faq-list-role-based';

describe('FaqListRoleBased', () => {
  let component: FaqListRoleBased;
  let fixture: ComponentFixture<FaqListRoleBased>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqListRoleBased]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqListRoleBased);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
