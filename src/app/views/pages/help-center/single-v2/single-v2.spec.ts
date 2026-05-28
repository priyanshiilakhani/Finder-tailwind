import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleV2 } from './single-v2';

describe('SingleV2', () => {
  let component: SingleV2;
  let fixture: ComponentFixture<SingleV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleV2],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
