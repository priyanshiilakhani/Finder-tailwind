import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar4 } from './navbar4';

describe('Navbar4', () => {
  let component: Navbar4;
  let fixture: ComponentFixture<Navbar4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar4],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
