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
import { QualityHomeComponent } from './dashboards/quality/quality-home.component';
import { FramesHomeComponent } from './dashboards/frames/frames-home.component';
import { HeadersHomeComponent } from './dashboards/headers/headers-home.component';
import { ShippingHomeComponent } from './dashboards/shipping/shipping-home.component';
import { TubesHomeComponent } from './dashboards/tubes/tubes-home.component';
import { FinsHomeComponent } from './dashboards/fins/fins-home.component';

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
    path: 'quality',
    component: QualityHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Quality Home'
    },
  },
  {
    path: 'frames',
    component: FramesHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Frames Home'
    },
  },
  {
    path: 'headers',
    component: HeadersHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Headers Home'
    },
  },
  {
    path: 'shipping',
    component: ShippingHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Shipping Home'
    },
  },
  {
    path: 'tubes',
    component: TubesHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Tubes Home'
    },
  },
  {
    path: 'fins',
    component: FinsHomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Fins Home'
    },
  },
  {
    path: 'console',
    component: CommConsoleComponent,
    pathMatch: 'full',
    data: {
      title: 'Control Console'
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
