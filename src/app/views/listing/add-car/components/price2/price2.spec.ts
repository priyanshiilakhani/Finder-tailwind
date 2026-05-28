import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Price2 } from './price2';

describe('Price2', () => {
  let component: Price2;
  let fixture: ComponentFixture<Price2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Price2],
    }).compileComponents();

    fixture = TestBed.createComponent(Price2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
