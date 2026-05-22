import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuide } from './city-guide';

describe('CityGuide', () => {
  let component: CityGuide;
  let fixture: ComponentFixture<CityGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityGuide],
    }).compileComponents();

    fixture = TestBed.createComponent(CityGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
