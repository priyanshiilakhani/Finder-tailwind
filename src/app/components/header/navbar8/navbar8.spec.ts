import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar8 } from './navbar8';

describe('Navbar8', () => {
  let component: Navbar8;
  let fixture: ComponentFixture<Navbar8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar8],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
