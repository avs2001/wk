import {Routes} from "@angular/router";

export const UserRoutes: Routes = [
  {path: '', loadComponent: () => import('./page/page.component').then(c => c.PageComponent)}
];
