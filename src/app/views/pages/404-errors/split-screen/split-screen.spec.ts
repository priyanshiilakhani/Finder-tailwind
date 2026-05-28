import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitScreen } from './split-screen';

describe('SplitScreen', () => {
  let component: SplitScreen;
  let fixture: ComponentFixture<SplitScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
