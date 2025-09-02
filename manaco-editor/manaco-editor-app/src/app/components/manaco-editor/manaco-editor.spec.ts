import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManacoEditor } from './manaco-editor';

describe('ManacoEditor', () => {
  let component: ManacoEditor;
  let fixture: ComponentFixture<ManacoEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManacoEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManacoEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
