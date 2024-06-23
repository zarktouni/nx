import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote-app1',
    loadComponent: () => import('../../../remote-app1/src/app/app.component').then(m => m.AppComponent),
  },
  {
    path: 'remote-app2',
    loadComponent: () => import('../../../remote-app2/src/app/app.component').then(m => m.AppComponent),
  },
  {
    path: 'shell',
    loadComponent: () => import('../../../shell/src/app/home/home.component').then(m => m.HomeComponent),
  }
];
