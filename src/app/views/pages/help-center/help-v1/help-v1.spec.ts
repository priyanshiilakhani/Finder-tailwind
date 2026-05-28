import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpV1 } from './help-v1';

describe('HelpV1', () => {
  let component: HelpV1;
  let fixture: ComponentFixture<HelpV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpV1],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
