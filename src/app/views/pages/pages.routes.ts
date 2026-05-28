import { Route } from '@angular/router';
import { V1 as AboutV1 } from './about/v1/v1';
import { V2 as AboutV2 } from './about/v2/v2';
import { BlogV1 } from './blog/blog-v1/blog-v1';
import { BlogV2 } from './blog/blog-v2/blog-v2';
import { BlogV3 } from './blog/blog-v3/blog-v3';
import { BlogV4 } from './blog/blog-v4/blog-v4';
import { SingleV1 as BlogSingleV1 } from './blog/single-v1/single-v1';
import { SingleV2 as BlogSingleV2 } from './blog/single-v2/single-v2';
import { SingleV3 as BlogSingleV3 } from './blog/single-v3/single-v3';
import { V1 as ContactV1 } from './contact/v1/v1';
import { V2 as ContactV2 } from './contact/v2/v2';
import { V3 as ContactV3 } from './contact/v3/v3';
import { HelpV1 } from './help-center/help-v1/help-v1';
import { HelpV2 } from './help-center/help-v2/help-v2';
import { HelpV3 } from './help-center/help-v3/help-v3';
import { SingleV1 as HelpSingleV1 } from './help-center/single-v1/single-v1';
import { SingleV2 as HelpSingleV2 } from './help-center/single-v2/single-v2';
import { SingleV3 as HelpSingleV3 } from './help-center/single-v3/single-v3';
import { BackgroundImage } from './404-errors/background-image/background-image';
import { IconImage } from './404-errors/icon-image/icon-image';
import { SplitScreen } from './404-errors/split-screen/split-screen';
import { Illustration } from './404-errors/illustration/illustration';
import { TermsAndConditions } from './terms-and-conditions/terms-and-conditions';

export const PAGES_ROUTES: Route[] = [
  {
    path: 'about/v1',
    component: AboutV1,
    data: { title: 'About v.1' },
  },
  {
    path: 'about/v2',
    component: AboutV2,
    data: { title: 'About v.2' },
  },
  {
    path: 'blog-layout/v1',
    component: BlogV1,
    data: { title: 'Blog Layout v.1' },
  },
  {
    path: 'blog-layout/v2',
    component: BlogV2,
    data: { title: 'Blog Layout v.2' },
  },
  {
    path: 'blog-layout/v3',
    component: BlogV3,
    data: { title: 'Blog Layout v.3' },
  },
  {
    path: 'blog-layout/v4',
    component: BlogV4,
    data: { title: 'Blog Layout v.4' },
  },
  {
    path: 'blog-single/v1',
    component: BlogSingleV1,
    data: { title: 'Single Post v.1' },
  },
  {
    path: 'blog-single/v2',
    component: BlogSingleV2,
    data: { title: 'Single Post v.2' },
  },
  {
    path: 'blog-single/v3',
    component: BlogSingleV3,
    data: { title: 'Single Post v.3' },
  },
  {
    path: 'contact/v1',
    component: ContactV1,
    data: { title: 'Contact v.1' },
  },
  {
    path: 'contact/v2',
    component: ContactV2,
    data: { title: 'Contact v.2' },
  },
  {
    path: 'contact/v3',
    component: ContactV3,
    data: { title: 'Contact v.3' },
  },
  {
    path: 'help/topics/v1',
    component: HelpV1,
    data: { title: 'Help Topics v.1' },
  },
  {
    path: 'help/topics/v2',
    component: HelpV2,
    data: { title: 'Help Topics v.2' },
  },
  {
    path: 'help/topics/v3',
    component: HelpV3,
    data: { title: 'Help Topics v.3' },
  },
  {
    path: 'help/single-article/v1',
    component: HelpSingleV1,
    data: { title: 'Help Single Article v.1' },
  },
  {
    path: 'help/single-article/v2',
    component: HelpSingleV2,
    data: { title: 'Help Single Article v.2' },
  },
  {
    path: 'help/single-article/v3',
    component: HelpSingleV3,
    data: { title: 'Help Single Article v.3' },
  },
  {
    path: '404/bg-image',
    component: BackgroundImage,
    data: { title: 'Background Image (Real Estate)' },
  },
  {
    path: '404/icon',
    component: IconImage,
    data: { title: 'Icon Image (Cars)' },
  },
  {
    path: '404/split-screen',
    component: SplitScreen,
    data: { title: 'Split Screen (Contractors)' },
  },
  {
    path: '404/illustration',
    component: Illustration,
    data: { title: 'Illustration (City Guide)' },
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditions,
    data: { title: 'Terms & Conditions' },
  },
];
