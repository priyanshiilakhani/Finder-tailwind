import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverallInfo } from './overall-info';

describe('OverallInfo', () => {
  let component: OverallInfo;
  let fixture: ComponentFixture<OverallInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(OverallInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
