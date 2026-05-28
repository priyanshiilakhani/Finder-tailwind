import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleV1 } from './single-v1';

describe('SingleV1', () => {
  let component: SingleV1;
  let fixture: ComponentFixture<SingleV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleV1],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
