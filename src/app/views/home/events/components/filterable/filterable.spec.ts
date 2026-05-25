import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filterable } from './filterable';

describe('Filterable', () => {
  let component: Filterable;
  let fixture: ComponentFixture<Filterable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filterable],
    }).compileComponents();

    fixture = TestBed.createComponent(Filterable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
