import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopOffers } from './top-offers';

describe('TopOffers', () => {
  let component: TopOffers;
  let fixture: ComponentFixture<TopOffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopOffers],
    }).compileComponents();

    fixture = TestBed.createComponent(TopOffers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
