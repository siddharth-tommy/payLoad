import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'Signin', 
    pathMatch: 'full' 
  },
  {

    path: 'Signin',
    loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule),
    data: { title: 'Signin' }
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'payload', 
        loadChildren: () => import('./views/payload/sessions.module').then(m => m.SessionsModule),
        data: { title: 'payload'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
    
      {
        path: 'Dashboard',
        loadChildren: () => import('./views/dashboard-table/dashboard-table.module').then(m => m.DatabashTableModule),
        data: { title: 'Dashboard' }
      },
      
      {
        path: 'userdetails/:id',
        loadChildren: () => import('./views/userdetails/userdetails.module').then(m => m.UserDetailsModule),
        data: { title: 'UserDetailsModule' }
      },
      {
        path: 'Configuration/:id',
        loadChildren: () => import('./views/configuration/configuration.module').then(m => m.ConfigurationModule),
        data: { title: 'Configuration' }
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

