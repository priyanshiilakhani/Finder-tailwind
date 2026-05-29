import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentContent } from './payment-content';

describe('PaymentContent', () => {
  let component: PaymentContent;
  let fixture: ComponentFixture<PaymentContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentContent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
