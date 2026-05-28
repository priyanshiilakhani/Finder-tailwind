import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV3 } from './blog-v3';

describe('BlogV3', () => {
  let component: BlogV3;
  let fixture: ComponentFixture<BlogV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogV3],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
