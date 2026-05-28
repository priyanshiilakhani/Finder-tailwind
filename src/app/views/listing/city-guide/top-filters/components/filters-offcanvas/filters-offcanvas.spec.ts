import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersOffcanvas } from './filters-offcanvas';

describe('FiltersOffcanvas', () => {
  let component: FiltersOffcanvas;
  let fixture: ComponentFixture<FiltersOffcanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersOffcanvas],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersOffcanvas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
