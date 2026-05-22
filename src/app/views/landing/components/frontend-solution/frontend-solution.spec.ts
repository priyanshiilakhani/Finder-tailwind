import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSolution } from './frontend-solution';

describe('FrontendSolution', () => {
  let component: FrontendSolution;
  let fixture: ComponentFixture<FrontendSolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSolution],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendSolution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
