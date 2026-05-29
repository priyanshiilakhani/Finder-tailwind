import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellingCar } from './selling-car';

describe('SellingCar', () => {
  let component: SellingCar;
  let fixture: ComponentFixture<SellingCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingCar],
    }).compileComponents();

    fixture = TestBed.createComponent(SellingCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
