import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarInfo } from './car-info';

describe('CarInfo', () => {
  let component: CarInfo;
  let fixture: ComponentFixture<CarInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(CarInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
