import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCta } from './registration-cta';

describe('RegistrationCta', () => {
  let component: RegistrationCta;
  let fixture: ComponentFixture<RegistrationCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCta],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
