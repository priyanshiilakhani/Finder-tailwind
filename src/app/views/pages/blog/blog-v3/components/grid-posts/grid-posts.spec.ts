import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridPosts } from './grid-posts';

describe('GridPosts', () => {
  let component: GridPosts;
  let fixture: ComponentFixture<GridPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(GridPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
