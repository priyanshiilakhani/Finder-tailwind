import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpV2 } from './help-v2';

describe('HelpV2', () => {
  let component: HelpV2;
  let fixture: ComponentFixture<HelpV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpV2],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
