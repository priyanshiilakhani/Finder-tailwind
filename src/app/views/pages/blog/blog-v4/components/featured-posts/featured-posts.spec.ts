import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedPosts } from './featured-posts';

describe('FeaturedPosts', () => {
  let component: FeaturedPosts;
  let fixture: ComponentFixture<FeaturedPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
