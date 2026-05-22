import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'iconify-icon';
import 'img-comparison-slider'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
