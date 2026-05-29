import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsContent } from './reviews-content';

describe('ReviewsContent', () => {
  let component: ReviewsContent;
  let fixture: ComponentFixture<ReviewsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
