import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCost } from './property-cost';

describe('PropertyCost', () => {
  let component: PropertyCost;
  let fixture: ComponentFixture<PropertyCost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCost],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
