import {Routes} from "@angular/router";

export const DashboardRoutes: Routes = [
  {path: '', loadComponent: () => import('./page/page.component').then(c => c.PageComponent)},
];
