import { ThemeMode, ThemeService } from '@/app/services/theme.service';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { themeData } from './data';

@Component({
  selector: 'app-theme-dropdown',
  imports: [LucideAngularModule],
  templateUrl: './theme-dropdown.html',
  styles: ``,
})
export class ThemeDropdown {
  @Input() wrapperClass: string = '';
  themeData = themeData;
  constructor(private themeService: ThemeService) {}

  setTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
  }
}
