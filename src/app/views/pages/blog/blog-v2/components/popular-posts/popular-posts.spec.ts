import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPosts } from './popular-posts';

describe('PopularPosts', () => {
  let component: PopularPosts;
  let fixture: ComponentFixture<PopularPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPosts],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
