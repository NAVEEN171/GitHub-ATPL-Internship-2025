import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredUserData } from './filtered-user-data';

describe('FilteredUserData', () => {
  let component: FilteredUserData;
  let fixture: ComponentFixture<FilteredUserData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredUserData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredUserData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
