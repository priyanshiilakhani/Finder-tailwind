import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAgents } from './top-agents';

describe('TopAgents', () => {
  let component: TopAgents;
  let fixture: ComponentFixture<TopAgents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAgents],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAgents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
