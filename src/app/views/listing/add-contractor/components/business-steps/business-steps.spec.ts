import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSteps } from './business-steps';

describe('BusinessSteps', () => {
  let component: BusinessSteps;
  let fixture: ComponentFixture<BusinessSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSteps],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessSteps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
