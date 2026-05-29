import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationSetting } from './notification-setting';

describe('NotificationSetting', () => {
  let component: NotificationSetting;
  let fixture: ComponentFixture<NotificationSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSetting],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
