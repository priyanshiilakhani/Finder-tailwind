import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideFilters } from './side-filters';

describe('SideFilters', () => {
  let component: SideFilters;
  let fixture: ComponentFixture<SideFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(SideFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
