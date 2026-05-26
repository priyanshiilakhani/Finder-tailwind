import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntry } from './single-entry';

describe('SingleEntry', () => {
  let component: SingleEntry;
  let fixture: ComponentFixture<SingleEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
