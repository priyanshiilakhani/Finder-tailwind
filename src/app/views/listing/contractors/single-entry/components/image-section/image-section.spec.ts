import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSection } from './image-section';

describe('ImageSection', () => {
  let component: ImageSection;
  let fixture: ComponentFixture<ImageSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
