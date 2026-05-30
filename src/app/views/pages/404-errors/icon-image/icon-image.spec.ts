import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconImage } from './icon-image';

describe('IconImage', () => {
  let component: IconImage;
  let fixture: ComponentFixture<IconImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconImage],
    }).compileComponents();

    fixture = TestBed.createComponent(IconImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
