import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterBooking } from './after-booking';

describe('AfterBooking', () => {
  let component: AfterBooking;
  let fixture: ComponentFixture<AfterBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterBooking],
    }).compileComponents();

    fixture = TestBed.createComponent(AfterBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
