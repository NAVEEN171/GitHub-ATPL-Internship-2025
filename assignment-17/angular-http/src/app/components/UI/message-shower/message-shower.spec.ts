import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageShower } from './message-shower';

describe('MessageShower', () => {
  let component: MessageShower;
  let fixture: ComponentFixture<MessageShower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageShower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageShower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
