import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar7 } from './navbar7';

describe('Navbar7', () => {
  let component: Navbar7;
  let fixture: ComponentFixture<Navbar7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar7],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
