import {Routes} from "@angular/router";

export const TenantRoutes: Routes = [
  {path: '', loadComponent: () => import('./page/page.component').then(c => c.PageComponent)},
];
