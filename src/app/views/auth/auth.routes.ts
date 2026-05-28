import { Route } from '@angular/router';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';
import { PasswordRecovery } from './password-recovery/password-recovery';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'signin',
    component: Signin,
    data: { title: 'Signin' },
  },
  {
    path: 'signup',
    component: Signup,
    data: { title: 'Signup' },
  },
  {
    path: 'password-recovery',
    component: PasswordRecovery,
    data: { title: 'Password Recovery' },
  },
];
