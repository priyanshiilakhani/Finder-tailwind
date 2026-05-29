import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CEOAddress } from './ceo-address';

describe('CEOAddress', () => {
  let component: CEOAddress;
  let fixture: ComponentFixture<CEOAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CEOAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(CEOAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
