import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAdvice } from './expert-advice';

describe('ExpertAdvice', () => {
  let component: ExpertAdvice;
  let fixture: ComponentFixture<ExpertAdvice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertAdvice],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertAdvice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
