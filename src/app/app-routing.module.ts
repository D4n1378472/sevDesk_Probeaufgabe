import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./views/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./views/converter/converter.module').then(m => m.ConverterModule)
  },
  {
    path: 'diagram',
    loadChildren: () => import('./views/diagram/diagram.module').then(m => m.DiagramModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./views/my/my.module').then(m => m.MyModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
