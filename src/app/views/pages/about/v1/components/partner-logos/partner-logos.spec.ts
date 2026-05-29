import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLogos } from './partner-logos';

describe('PartnerLogos', () => {
  let component: PartnerLogos;
  let fixture: ComponentFixture<PartnerLogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerLogos],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerLogos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
