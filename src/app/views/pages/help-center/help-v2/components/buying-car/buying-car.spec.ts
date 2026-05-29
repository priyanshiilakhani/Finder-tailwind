import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyingCar } from './buying-car';

describe('BuyingCar', () => {
  let component: BuyingCar;
  let fixture: ComponentFixture<BuyingCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingCar],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyingCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
