import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer5 } from './footer5';

describe('Footer5', () => {
  let component: Footer5;
  let fixture: ComponentFixture<Footer5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer5],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
