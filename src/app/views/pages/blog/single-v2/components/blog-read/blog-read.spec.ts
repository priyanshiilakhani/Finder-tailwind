import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogRead } from './blog-read';

describe('BlogRead', () => {
  let component: BlogRead;
  let fixture: ComponentFixture<BlogRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRead],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogRead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
