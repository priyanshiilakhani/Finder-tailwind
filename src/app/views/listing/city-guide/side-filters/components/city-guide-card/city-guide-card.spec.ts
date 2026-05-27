import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityGuideCard } from './city-guide-card';

describe('CityGuideCard', () => {
  let component: CityGuideCard;
  let fixture: ComponentFixture<CityGuideCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityGuideCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CityGuideCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
