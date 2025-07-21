import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeUsage } from './custom-pipe-usage';

describe('CustomPipeUsage', () => {
  let component: CustomPipeUsage;
  let fixture: ComponentFixture<CustomPipeUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipeUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
