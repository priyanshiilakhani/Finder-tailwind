import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar5 } from './navbar5';

describe('Navbar5', () => {
  let component: Navbar5;
  let fixture: ComponentFixture<Navbar5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar5],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
