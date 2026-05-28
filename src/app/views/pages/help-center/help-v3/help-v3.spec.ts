import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpV3 } from './help-v3';

describe('HelpV3', () => {
  let component: HelpV3;
  let fixture: ComponentFixture<HelpV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpV3],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
