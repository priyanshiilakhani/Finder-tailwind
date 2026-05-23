import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCta } from './download-cta';

describe('DownloadCta', () => {
  let component: DownloadCta;
  let fixture: ComponentFixture<DownloadCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCta],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
