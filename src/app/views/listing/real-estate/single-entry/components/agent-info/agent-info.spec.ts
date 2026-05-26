import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInfo } from './agent-info';

describe('AgentInfo', () => {
  let component: AgentInfo;
  let fixture: ComponentFixture<AgentInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
