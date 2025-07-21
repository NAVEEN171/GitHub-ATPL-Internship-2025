import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadlines } from './news-headlines';

describe('NewsHeadlines', () => {
  let component: NewsHeadlines;
  let fixture: ComponentFixture<NewsHeadlines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsHeadlines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHeadlines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
