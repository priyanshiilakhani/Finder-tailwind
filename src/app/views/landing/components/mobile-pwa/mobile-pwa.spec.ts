import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePwa } from './mobile-pwa';

describe('MobilePwa', () => {
  let component: MobilePwa;
  let fixture: ComponentFixture<MobilePwa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePwa],
    }).compileComponents();

    fixture = TestBed.createComponent(MobilePwa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
