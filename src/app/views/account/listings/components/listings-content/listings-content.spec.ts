import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsContent } from './listings-content';

describe('ListingsContent', () => {
  let component: ListingsContent;
  let fixture: ComponentFixture<ListingsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingsContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingsContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
