import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularArticles } from './popular-articles';

describe('PopularArticles', () => {
  let component: PopularArticles;
  let fixture: ComponentFixture<PopularArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularArticles],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
