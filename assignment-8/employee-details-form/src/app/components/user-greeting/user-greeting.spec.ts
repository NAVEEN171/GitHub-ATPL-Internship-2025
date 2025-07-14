import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGreeting } from './user-greeting';

describe('UserGreeting', () => {
  let component: UserGreeting;
  let fixture: ComponentFixture<UserGreeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGreeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGreeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
