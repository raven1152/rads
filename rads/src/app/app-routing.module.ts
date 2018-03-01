import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './dashboards/not-found/not-found.component';
import { GuestHomeComponent } from './dashboards/guest/guest-home.component';
import { FacilityHomeComponent } from './dashboards/facility/facility-home.component';
import { ItHomeComponent } from './dashboards/it/it-home.component';
import { SalesHomeComponent } from './dashboards/sales/sales-home.component';
import { EngineeringHomeComponent } from './dashboards/engineering/engineering-home.component';
import { DraftingHomeComponent } from './dashboards/drafting/drafting-home.component';
import { CommConsoleComponent } from './components/comm-console/comm-console.component';

const routes: Routes = [
  {
    path: 'guest',
    component: GuestHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Guest Home'
    },
  },
  {
    path: 'facility',
    component: FacilityHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Facility Home'
    },
  },
  {
    path: 'it',
    component: ItHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Information Technology Home'
    },
  },
  {
    path: 'sales',
    component: SalesHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Sales Home'
    },
  },
  {
    path: 'engineering',
    component: EngineeringHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Engineering Home'
    },
  },
  {
    path: 'drafting',
    component: DraftingHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Drafting Home'
    },
  },
  {
    path: 'console',
    component: CommConsoleComponent,
    pathMatch: 'full',
    data: {
      title: 'Drafting Home'
    },
  },
  { path: '',
    redirectTo: '/guest',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
