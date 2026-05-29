import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfo } from './person-info';

describe('PersonInfo', () => {
  let component: PersonInfo;
  let fixture: ComponentFixture<PersonInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
