import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceHours } from './price-hours';

describe('PriceHours', () => {
  let component: PriceHours;
  let fixture: ComponentFixture<PriceHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceHours],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceHours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
