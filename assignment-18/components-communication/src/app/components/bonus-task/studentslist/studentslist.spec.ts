import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentslist } from './studentslist';

describe('Studentslist', () => {
  let component: Studentslist;
  let fixture: ComponentFixture<Studentslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentslist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
