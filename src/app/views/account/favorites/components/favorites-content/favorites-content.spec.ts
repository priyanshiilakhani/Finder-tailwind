import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesContent } from './favorites-content';

describe('FavoritesContent', () => {
  let component: FavoritesContent;
  let fixture: ComponentFixture<FavoritesContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesContent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
