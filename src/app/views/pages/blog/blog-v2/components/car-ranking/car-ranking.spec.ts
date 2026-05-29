import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRanking } from './car-ranking';

describe('CarRanking', () => {
  let component: CarRanking;
  let fixture: ComponentFixture<CarRanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRanking],
    }).compileComponents();

    fixture = TestBed.createComponent(CarRanking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
