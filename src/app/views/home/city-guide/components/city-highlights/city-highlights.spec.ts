import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHighlights } from './city-highlights';

describe('CityHighlights', () => {
  let component: CityHighlights;
  let fixture: ComponentFixture<CityHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityHighlights],
    }).compileComponents();

    fixture = TestBed.createComponent(CityHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
