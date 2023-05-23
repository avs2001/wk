import {Routes} from "@angular/router";

export const TenantRoutes: Routes = [
  {
    path: '', loadComponent: () => import('./page/page.component').then(c => c.PageComponent),
    children: [
      {path: '', loadComponent: () => import('./tenant-list/tenant-list.component').then(c => c.TenantListComponent)},
      {
        path: 'view',
        loadComponent: () => import('./tenant-view-page/tenant-view-page.component').then(c => c.TenantViewPageComponent)
      },
      {
        path: 'device',
        loadComponent: () => import('./device/device-list/device-list.component').then(c => c.DeviceListComponent)
      },
      {
        path: 'data-source',
        loadComponent: () => import('./data-source/data-source-list/data-source-list.component').then(c => c.DataSourceListComponent)
      },
    ]
  },
];
