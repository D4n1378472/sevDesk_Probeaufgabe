import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './views/converter/converter.component';
import { DetailsComponent } from './views/details/details.component';
import { DiagramComponent } from './views/diagram/diagram.component';
import { MyComponent } from './views/my/my.component';

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
    component: DetailsComponent
  },
  {
    path: 'converter',
    component: ConverterComponent
  },
  {
    path: 'diagram',
    component: DiagramComponent
  },
  {
    path: 'my',
    component: MyComponent
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
