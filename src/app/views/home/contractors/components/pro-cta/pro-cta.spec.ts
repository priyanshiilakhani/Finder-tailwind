import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCta } from './pro-cta';

describe('ProCta', () => {
  let component: ProCta;
  let fixture: ComponentFixture<ProCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProCta],
    }).compileComponents();

    fixture = TestBed.createComponent(ProCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
