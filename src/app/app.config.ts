import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { icons, LucideAngularModule } from 'lucide-angular'

import { routes } from './app.routes';
import { provideFlatpickrDefaults } from 'angularx-flatpickr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFlatpickrDefaults(),
    importProvidersFrom(LucideAngularModule.pick(icons)),
  ],
};
