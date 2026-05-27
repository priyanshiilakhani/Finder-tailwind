import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimilarListings } from './similar-listings';

describe('SimilarListings', () => {
  let component: SimilarListings;
  let fixture: ComponentFixture<SimilarListings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarListings],
    }).compileComponents();

    fixture = TestBed.createComponent(SimilarListings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
