import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { CustomLayoutComponent } from './layouts/custom-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ratecard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CustomLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'ratecard',
        loadChildren: './ratecard/ratecard.module#RateCardModule'
        }
    ]
  },
  // {
  //   path: '',
  //   component: FullLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: './dashboard/dashboard.module#DashboardModule'
  //     },
  //     {
  //       path: 'components',
  //       loadChildren: './components/components.module#ComponentsModule'
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: './icons/icons.module#IconsModule'
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: './widgets/widgets.module#WidgetsModule'
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: './chartjs/chartjs.module#ChartJSModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'pages',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './pages/pages.module#PagesModule',
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
