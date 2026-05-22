topbar btn me border work nahi kar rahi



Convert static HTML into dynamic UI using @for loop with JSON data and TypeScript typing, import any images at the top of the file and bind them in the data, without modifying the existing design.



I will provide my Angular HTML code, component TS, CSS, and custom directive code.
 Your task is to properly integrate and fix the parallax effect in Angular according to my directive implementation.
Analyze my code first and understand how the directive works.
 Then fix and optimize the parallax effect without changing my existing design unnecessarily.[10:34 AM]Convert this HTML Swiper into Angular standalone component using latest `swiper/element`.

Requirements:
- Keep exact same HTML design and structure
- Do not change UI, classes, styling, layout, or swiper design
- Use only the same swiper options provided in HTML
- Do not add extra swiper configs or custom logic
- Use `<swiper-container>` and `<swiper-slide>`
- Keep all swiper options exactly same as original HTML
- Support direct HTML swiper configs like:

<swiper-container
  slides-per-view="1"
  space-between="24"
  loop="true"
  navigation="true"
  navigation-next-el="#next-testimonial"
  navigation-prev-el="#prev-testimonial"
  pagination="true"
  pagination-el=".swiper-pagination"
  pagination-clickable="true"
  pagination-center-insufficient-slides="true"
  [breakpoints]='{
    "0": {
      "slidesPerView": 2,
      "spaceBetween": 10
    },
    "600": {
      "slidesPerView": 3,
      "spaceBetween": 16
    },
    "991": {
      "slidesPerView": 4,
      "spaceBetween": 24
    }
  }'
>

- Use `[breakpoints]` binding exactly like HTML
- Import and register swiper:

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

- Add:
schemas: [CUSTOM_ELEMENTS_SCHEMA]