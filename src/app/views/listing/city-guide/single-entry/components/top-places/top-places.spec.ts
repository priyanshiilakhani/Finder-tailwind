import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopPlaces } from './top-places';

describe('TopPlaces', () => {
  let component: TopPlaces;
  let fixture: ComponentFixture<TopPlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPlaces],
    }).compileComponents();

    fixture = TestBed.createComponent(TopPlaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
