import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColumns } from './info-columns';

describe('InfoColumns', () => {
  let component: InfoColumns;
  let fixture: ComponentFixture<InfoColumns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoColumns],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoColumns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
