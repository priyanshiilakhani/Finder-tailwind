import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTopics } from './help-topics';

describe('HelpTopics', () => {
  let component: HelpTopics;
  let fixture: ComponentFixture<HelpTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpTopics],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpTopics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
