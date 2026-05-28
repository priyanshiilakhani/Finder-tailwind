import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV4 } from './blog-v4';

describe('BlogV4', () => {
  let component: BlogV4;
  let fixture: ComponentFixture<BlogV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogV4],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogV4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
