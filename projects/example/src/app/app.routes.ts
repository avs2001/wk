import {Routes} from "@angular/router";

export const AppRoutes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(r => r.DashboardRoutes)},
  {path: 'tenant', loadChildren: () => import('./tenant/tenant.routes').then(r => r.TenantRoutes)},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
]
