import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleV3 } from './single-v3';

describe('SingleV3', () => {
  let component: SingleV3;
  let fixture: ComponentFixture<SingleV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleV3],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
