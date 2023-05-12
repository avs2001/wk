import {Route, Routes} from "@angular/router";

export const DeviceRoutes: Routes = [
  {path: '', loadComponent: () => import('./page/page.component').then(c => c.PageComponent)}
]
