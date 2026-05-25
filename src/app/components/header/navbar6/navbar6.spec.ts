import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar6 } from './navbar6';

describe('Navbar6', () => {
  let component: Navbar6;
  let fixture: ComponentFixture<Navbar6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar6],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
