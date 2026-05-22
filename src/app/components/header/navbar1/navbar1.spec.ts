import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1 } from './navbar1';

describe('Navbar1', () => {
  let component: Navbar1;
  let fixture: ComponentFixture<Navbar1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar1],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
