import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilters } from './top-filters';

describe('TopFilters', () => {
  let component: TopFilters;
  let fixture: ComponentFixture<TopFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(TopFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
